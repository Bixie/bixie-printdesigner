module.exports = {

    template: require('./fabric_images.template.html'),

    inherit: true,

    data: function () {
        return {
            figures: []
        };
    },

    methods: {

        addImage: function () {
            var obj = this.$getLayer('image', {
                url: this.activeAsset.url
            });

            this._addLayer(obj);
        }
    }
};