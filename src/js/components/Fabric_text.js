module.exports = {

    template: require('./fabric_text.template.html'),

    inherit: true,

    data: function () {
        return {
            fonts: [
                {
                    value: 'Times New Roman',
                    text: 'Times New Roman'
                },
                {
                    value: 'Georgia',
                    text: 'Georgia'
                },
                {
                    value: 'Arial',
                    text: 'Arial'
                },
                {
                    value: 'Lucida Sans Unicode',
                    text: 'Lucida Sans'
                },
                {
                    value: 'Courier New',
                    text: 'Courier New'
                },
                {
                    value: 'Trebuchet MS',
                    text: 'Trebuchet'
                },
                {
                    value: 'Tahoma',
                    text: 'Tahoma'
                },
                {
                    value: 'Comic Sans MS',
                    text: 'Comic Sans'
                }
            ]
        };
    },

    methods: {

        addText: function () {
            var obj = this.$getLayer('text', {
                text: 'Text'
            });

            this._addLayer(obj);
        }
    }
};