<template>
    <a href="" class="uk-button" data-uk-lightbox="" data-lightbox-type="fabricpreview">
        <i class="uk-icon-eye uk-margin-small-right"></i>{{ 'Preview' | trans }}</a>

    <a href="" class="uk-button uk-button-primary" v-on="click: exportDesign" download="{{ projectName | snake}}">
        <i class="uk-icon-download uk-margin-small-right"></i>{{ 'Exporteer' | trans }}</a>
</template>

<script>

module.exports = {

    props: [],

    inherit: true,

    ready: function () {
        var $this = this;
        UIkit.on('beforeready.uk.dom', function () {

            UIkit.plugin('lightbox', 'fabricpreview', {

                init: function (lightbox) {

                    lightbox.on('showitem.uk.lightbox', function (e, data) {

                        var resolve = function (source, width, height) {

                            data.meta = {
                                'content': '<img src="' + source + '" alt="" width="' + width + '" height="' + height + '"/>',
                                'width': width,
                                'height': height
                            };

                            data.promise.resolve();
                        };

                        if (data.type === 'fabricpreview') {
                            resolve($this.exportImage(), Math.min($this.canvas.width, 800), Math.min($this.canvas.height, 600));
                        }
                    });

                }
            });
        });
    },

    methods: {
        exportImage: function () {
            this.canvas.discardActiveGroup();
            this.canvas.discardActiveObject();
            return this.canvas.toDataURL();
        },
        exportDesign: function (e) {
            this.canvas.discardActiveGroup();
            this.canvas.discardActiveObject();
            e.target.href = this.canvas.toDataURL();
            console.log(this.canvas.toSVG());

        }
    }

};

</script>