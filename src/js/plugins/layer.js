exports.install = function (Vue) {
    var _util = require('../lib/util');

    var Layer = function Layer(type) {
            this.id = _util.randomId();
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
                    fill: '#ff0000'
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
        },
        _toObject: function () {
            return _.extend({}, this, {fObj: null});
        }

    });

    Vue.prototype.$getLayer = function (type, layerObj) {
        var layer = new Layer(type, layerObj);
        _.extend(layer, layerObj);
        if (layerObj.fObj === undefined) { //only on empty new instance
            layer.setFabricObject();
        }
        return layer;
    };
};
