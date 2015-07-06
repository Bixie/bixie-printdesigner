module.exports = {

    template: require('../templates/fabric_images.template.html'),

    inherit: true,

    data: function () {
        return {
            figures: []
        };
    },

    methods: {

        addImage: function () {
            var $this = this, obj = this.$getLayer('image', {
                title: this.$trans('image layer'),
                onSetFabricObject: function () {
                    var img = document.createElement('img');
                    img.src = $this.activeAsset.url;
                    this.fObj = new fabric.Image(img, {
                        left: 10,
                        top: 10,
                        width: img.width,
                        height: img.height
                    });
                }
            });

            this._addLayer(obj);
        }
    }
};