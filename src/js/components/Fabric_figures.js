module.exports = {

    template: require('../templates/fabric_figures.template.html'),

    inherit: true,

    data: function () {
        return {
            figures: [
                {
                    type: 'rectangle',
                    label: this.$trans('Rechthoek')
                },
                {
                    type: 'triangle',
                    label: this.$trans('Driehoek')
                },
                {
                    type: 'circle',
                    label: this.$trans('Cirkel')
                }
            ]
        };
    },

    methods: {

        addFigure: function (figure) {

            this._addLayer(this.getLayerObject(figure));

        },

        setFill: function (controlType, value) {
            if (controlType === 'fill') {
                this.activeLayer.fObj.setFill(value);
                this.updateValue(controlType);
            }
        },

        getLayerObject: function (figure) {

            return this.$getLayer(figure.type, {
                onSetFabricObject: function () {
                    switch (this.type) {
                    case 'rectangle':
                        this.fObj = new fabric.Rect({
                            top: 110,
                            left: 100,
                            width: 60,
                            height: 70,
                            fill: '#00ff00'
                        });
                        break;
                    case 'triangle':
                        this.fObj = new fabric.Triangle({
                            top: 100,
                            left: 120,
                            width: 60,
                            height: 70,
                            fill: '#ff0000'
                        });
                        break;
                    case 'circle':
                        this.fObj = new fabric.Circle({
                            top: 80,
                            left: 100,
                            radius: 30,
                            fill: '#0000ff'
                        });
                        break;
                    }
                },
                onUpdateValue: function (controlType) {
                }
            });

        }
    }
};