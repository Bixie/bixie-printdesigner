exports.install = function (Vue, options) {

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

        Layer = function Layer(type, data) {
            this.data = _.extend(layerDataDefaults, data);
            this.id = guid();
            this.title = type + ' layer';
            this.type = type;
            this.ordering = 0;
            this.fObj = null;
            this.setFabricObject();
        };

    _.extend(Layer.prototype, {
        setFabricObject: function () {
            switch (this.type) {
            case 'rectangle':
                this.fObj = new fabric.Rect({
                    top: 110,
                    left: 100,
                    width: 60,
                    height: 70,
                    fill: 'blue'
                });
                break;
            case 'triangle':
                this.fObj = new fabric.Triangle({
                    top: 100,
                    left: 120,
                    width: 60,
                    height: 70,
                    fill: 'red'
                });
                break;
            case 'circle':
                this.fObj = new fabric.Circle({
                    top: 80,
                    left: 100,
                    radius: 30,
                    fill: 'yellow'
                });
                break;
            case 'text':
                this.fObj = new fabric.Text(this.data.text, {
                    left: 10,
                    top: 10
                });
                break;
            case 'image':
                var img = document.createElement('img');
                img.src = this.data.url;
                this.fObj = new fabric.Image(img, {
                    left: 10,
                    top: 10,
                    width: 120,
                    height: 120
                });
                break;
            }

        },
        updateValue: function (controlType) {
            console.log(controlType);
            switch (controlType) {
            case 'angle':
                this.fObj.setAngle(this.fObj.angle);
                break;
            case 'text':
                this.title = this.fObj.text.substr(0, 15);
                break;
            case 'fontFamily':
                //this.fObj.setFontFamily(this.fObj.fontFamily);
                break;
            }
            this.fObj.setCoords();
        }

    });

    Vue.prototype.$getLayer = function (type, options) {
        return new Layer(type, options);
    };
};
