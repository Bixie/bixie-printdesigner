module.exports = {

    template: require('../templates/fabric_text.template.html'),

    inherit: true,

    data: function () {
        return {
            defaultText: 'Text',
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
            var $this = this, obj = this.$getLayer('text', {
                onSetFabricObject: function () {
                    this.fObj = new fabric.Text($this.defaultText, {
                        left: 10,
                        top: 10
                    });
                },
                onUpdateValue: function (controlType) {
                    if (controlType === 'text') {
                        this.title = this.fObj.text.substr(0, 15);
                    }
                }
            });

            this._addLayer(obj);
        },

        setFill: function (controlType, value) {
            if (controlType === 'fill') {
                this.activeLayer.fObj.setFill(value);
                this.updateValue(controlType);
            }
        }

    }
};