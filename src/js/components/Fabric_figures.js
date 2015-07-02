module.exports = {

    template: require('./fabric_figures.template.html'),

    inherit: true,

    data: function () {
        return {
            figures: [
                {
                    type: 'rectangle',
                    label: 'Rectangle'
                },
                {
                    type: 'triangle',
                    label: 'Triangle'
                },
                {
                    type: 'circle',
                    label: 'Circle'
                }
            ]
        };
    },

    methods: {

        addFigure: function (figure) {

            this._addLayer(this.getLayerObject(figure));

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
                    }
                }
            });

        }
    }
};