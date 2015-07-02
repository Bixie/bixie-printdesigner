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
            var obj = this.$getLayer(figure.type);

            this._addLayer(obj);
        }
    }
};