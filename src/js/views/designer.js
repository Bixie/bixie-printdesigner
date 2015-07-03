module.exports = {

    template: require('./designer.template.html'),

    data: function () {
        return {
            canvasOptions: {
                bgColor: 'white',
                width: 520,
                height: 300
            },
            activeAsset: {
                src: false
            },
            layers: [],
            activeLayerId: '',
            activeLayer: {
                type: false,
                fObj: {}
            },
            canvas: null,
            output: {}
        };
    },

    components: {
        fabric_layercontrols: require('../components/Fabric_layercontrols'),
        fabric_layerselect: require('../components/Fabric_layerselect'),
        fabric_figures: require('../components/Fabric_figures'),
        fabric_text: require('../components/Fabric_text'),
        fabric_images: require('../components/Fabric_images'),
        library: require('../components/Library')
    },

    ready: function () {

        this.$http.get('testdata.json', function (data, status, request) {

            console.log(data);
            // set data on vm
            //this.$set('someData', data);

        }).error(function (data, status, request) {
            // handle error
        });

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
        updateControls: function (e) {
            var fObj = e.target;
            if (this.activeLayer.fObj === fObj) { //just to make sure
                //this.activeLayer.fObj.scaleX = fObj.getScaleX();
                //this.activeLayer.fObj.scaleY = fObj.getScaleY();
                console.log(fObj.scaleX, fObj.scaleY);
                console.log(this.activeLayer.fObj.scaleX, this.activeLayer.fObj.scaleY);
            }
        },
        _removeLayer: function (layer) {
            this.layers = _.remove(this.layers, function (n) {
                return n.id !== layer.id;
            });
            if (layer.id === this.activeLayerId) {
                this.clearActiveLayer();
            }
            this.canvas.fxRemove(layer.fObj);
        },
        _addLayer: function (layer) {
            layer.ordering = this.layers.length + 1;
            this.layers.push(layer);
            this.canvas.add(layer.fObj);
            this.activeLayerId = layer.id;
        }
    },

    watch: {
        'activeLayerId': function (val) {
            var layer;
            if (val) {
                layer = _.find(this.layers, 'id', val);
                this.canvas.setActiveObject(layer.fObj);
            } else {
                layer = {
                    type: false,
                    fObj: {}
                };
            }
            this.$set('activeLayer', layer);
        }
    }
};