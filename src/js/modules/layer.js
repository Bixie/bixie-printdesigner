exports.install = function (Vue) {

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4();
    }

    var layerDataDefaults = {
            url: '',
            text: ''
        },

        Layer = function Layer(type) {
            this.id = guid();
            this.title = type + ' layer';
            this.type = type;
            this.ordering = 0;
            this.fObj = null;
        };

    _.extend(Layer.prototype, {
        setFabricObject: function () {
            if (typeof this.onSetFabricObject === 'function') {
                this.onSetFabricObject();
            } else {
                this.fObj = new fabric.Text('No object set', {
                    left: 10,
                    top: 10,
                    fill: 'red'
                });
            }
        },
        updateValue: function (controlType) {

            if (controlType === 'angle') {
                this.fObj.setAngle(this.fObj.angle); //todo still not works
            }

            if (typeof this.onUpdateValue === 'function') {
                this.onUpdateValue(controlType);
            }
            this.fObj.setCoords();
        }

    });

    Vue.prototype.$getLayer = function (type, layerObj) {
        var layer = new Layer(type, layerObj);
        _.extend(layer, layerObj);
        layer.setFabricObject();
        return layer;
    };
};
