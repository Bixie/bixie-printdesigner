var _util = require('../lib/util'); //todo why is _ available, and _uitl not??
//mixins
var stateMixin = require('../mixins/state.mixin'); //todo I want this in app.js

module.exports = {

    template: require('../templates/designer.template.html'),

    data: function () {
        return {
            projectName: this.$trans('Project 1'),
            projectID: _util.randomId(),
            bixConfig: window.$bixConfig,
            canvasOptions: window.$bixConfig.canvasOptions,
            activeAsset: {
                src: false
            },
            layers: [],
            activeLayerId: '',
            activeLayer: {
                type: false,
                fObj: {}
            },
            canvas: null
        };
    },

    components: {
        fabric_layercontrols: require('../components/Fabric_layercontrols'),
        fabric_layerselect: require('../components/Fabric_layerselect'),
        fabric_figures: require('../components/Fabric_figures'),
        fabric_text: require('../components/Fabric_text'),
        fabric_images: require('../components/Fabric_images'),
        fabric_export: require('../components/Fabric_export.vue'),
        fabric_state: require('../components/Fabric_state.vue'),
        fabric_library: require('../components/Fabric_library')
    },

    mixins: [stateMixin],

    created: function () {
        this.$http.get('testdata.json', function (data, status, request) {

            console.log(data);
            // set data on vm
            //this.$set('someData', data);

        }).error(function (data, status, request) {
            // handle error
        });


    },

    ready: function () {

        this.canvas = new fabric.Canvas(this.$$.canvas);
        this.canvas.setBackgroundColor(this.canvasOptions.bgColor);
        this.canvas.on({
            'selection:cleared': this.clearActiveLayer,
            'object:selected': this.setActiveLayer,
            //'object:moving': this.setActiveLayer,
            'object:scaling': this.updateControls
            //'object:resizing': this.setActiveLayer,
            //'object:rotating': this.setActiveLayer
        });
        this.updateCanvas();
        console.log('loaded.bps.canvas');
        this.$broadcast('loaded.bps.canvas');
    },

    filters: {
        coupon: function (cost) {
            return cost - (this.discount / 100 * cost);
        }
    },

    methods: {
        setActiveAsset: function (asset) {
            this.activeAsset = asset;
        },
        /**
         * update values from a external control
         * @param controlType
         */
        updateValue: function (controlType) {
            this.activeLayer.updateValue(controlType);
            this.updateCanvas();
        },
        /**
         * render canvas objects with new values
         */
        updateCanvas: function () {
            this.canvas.renderAll();
        },
        /**
         * canvasobjects have been altered, set activeLayer
         */
        setActiveLayer: function () {
            var activeObject = this.canvas.getActiveObject();
            _.forEach(this.layers, function (layer) {
                if (activeObject === layer.fObj) {
                    this.$set('activeLayerId', layer.id);
                }
            }.bind(this));
        },
        /**
         * clear selected layers
         */
        clearActiveLayer: function () {
            this.activeLayerId = '';
        },
        /**
         * clear complete canvas
         */
        clearCanvas: function () {
            this.clearActiveLayer();
            this.layers = [];
            this.canvas.clear();
        },
        /**
         * triggered from canvas
         * @param e
         */
        updateControls: function (e) {
            var fObj = e.target;
            if (this.activeLayer.fObj === fObj) { //just to make sure
                //this.activeLayer.fObj.scaleX = fObj.getScaleX();
                //this.activeLayer.fObj.scaleY = fObj.getScaleY();
                //console.log(fObj.scaleX, fObj.scaleY);
                //console.log(this.activeLayer.fObj.scaleX, this.activeLayer.fObj.scaleY);
            }
        },
        /**
         * add layer to canvas and data
         * @param layer
         * @private
         */
        _removeLayer: function (layer) {
            this.layers = _.remove(this.layers, function (n) {
                return n.id !== layer.id;
            });
            if (layer.id === this.activeLayerId) {
                this.clearActiveLayer();
            }
            this.canvas.fxRemove(layer.fObj);
        },
        /**
         * remove layer from canvas and data
         * @param layer
         * @private
         */
        _addLayer: function (layer) {
            layer.ordering = this.layers.length + 1;
            this.canvas.add(layer.fObj);
            console.log(layer.fObj);
            //layer.fObj = this.canvas.item(this.canvas.size() - 1); //get new reference
            console.log(layer.fObj.toObject()); //todo why is watcher not complete
            this.layers.push(layer);
            this.activeLayerId = layer.id;
        },
        /**
         * load object from storage
         * @param data
         * @private
         * todo get it more generic
         */
        _loadFromObject: function (data) {
            var $this = this;
            ['projectName', 'projectID', 'canvasOptions'].forEach(function (key) {
                $this.$set(key, data[key]);
            });
            this.layers = [];
            if (this.canvas) {
                this.canvas.loadFromDatalessJSON(data.canvas, function () {
                    $this.canvas.getObjects().forEach(function (canvasObj) {
                        var layerData = data.layers[canvasObj.layerId], layer = $this.$getLayer(layerData.type, layerData);
                        console.log(canvasObj); //todo why is watcher complete here?
                        layer.fObj = canvasObj;
                        $this.layers.push(layer);
                    });
                });
            }

        },
        /**
         * clone to object for storage
         * @returns {{projectName: *, projectID: *, canvasOptions: *, layers: Array, canvas: (Object|*)}}
         * @private
         * todo get it more generic
         */
        _toObject: function () {
            var obj = {
                projectName: this.projectName,
                projectID: this.projectID,
                canvasOptions: this.canvasOptions,
                layers: {},
                canvas: this.canvas.toDatalessJSON(['layerId'])
            };
            this.layers.forEach(function (layer) {
                obj.layers[layer.id] = layer._toObject();
            });
            return obj;
        }

    },

    watch: {
        /**
         * set reference to activelayer in canvas to this.activeLayer
         * @param val
         */
        'activeLayerId': function (val) {
            var layer;
            if (val) {
                layer = _.find(this.layers, 'id', val);
                this.canvas.setActiveObject(layer.fObj);
                this.$set('activeLayer', layer);
                this.$broadcast('set.bps.activelayer', [layer.id]);
            } else {
                this.$set('activeLayer', {
                    id: '',
                    type: false,
                    fObj: {}
                });
                this.$broadcast('clear.bps.activelayer');
            }
        }
    }
};