module.exports = {

    template: require('./designer.template.html'),

    data: function () {
        return {
            canvasOptions: {
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
        this.canvas = new fabric.Canvas(this.$$.canvas);
        this.canvas.setBackgroundColor('white');
        this.canvas.on({
            'selection:cleared': this.clearSelection,
            'object:moving': this.updateControls,
            'object:scaling': this.updateControls,
            'object:resizing': this.updateControls,
            'object:rotating': this.updateControls
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
        updateControls: function () {
            var activeObject = this.canvas.getActiveObject();
            _.forEach(this.layers, function (layer) {
                //console.log(layer.fObj.active);
                //console.log(layer.type);
                if (activeObject === layer.fObj) {
                    this.$set('activeLayerId', layer.id);
                }
            }.bind(this));
        },
        clearSelection: function () {
            this.activeLayerId = '';
        },
        _removeLayer: function (layer) {
            this.layers = _.remove(this.layers, function (n) {
                return n.id !== layer.id;
            });
            if (layer.id === this.activeLayerId) {
                this.clearSelection();
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