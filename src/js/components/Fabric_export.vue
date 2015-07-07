<template>
    <a href="" class="uk-button" data-uk-lightbox="" data-lightbox-type="fabricpreview">
        <i class="uk-icon-eye uk-margin-small-right"></i>{{ 'Preview' | trans }}</a>

    <button type="button" class="uk-button uk-button-primary" v-on="click: exportDesign">
        <i class="uk-icon-arrow-right uk-margin-small-right"></i>{{ 'Exporteer' | trans }}
    </button>

    <div class="uk-margin">
        <i class="uk-icon-spinner uk-icon-spin" v-show="spinning"></i>

        <div class="uk-button-group">

            <a class="uk-button uk-button-small" href="" target="_blank"
               v-show="pdf_path"
               v-attr="href: pdf_path"
                    >
                <i class="uk-icon-file-pdf-o uk-margin-small-right"></i>{{ 'PDF' | trans }}</a>

            <a class="uk-button uk-button-small" href="" target="_blank"
               v-show="svg_path"
               v-attr="href: svg_path"
                    >
                <i class="uk-icon-file-code-o uk-margin-small-right"></i>{{ 'SVG' | trans }}</a>
        </div>
    </div>


</template>

<script>

    module.exports = {

        data: function () {
            return {
                spinning: false
            }
        },

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

                this.deactivateCanvas();

                return this.canvas.toDataURL();

            },
            exportDesign: function (e) {

                this.deactivateCanvas();

                this.spinning = true;
                this.$set('pdf_path', '');
                this.$set('svg_path', '');

                this.$http.post('export', {
                    project: this._toObject(),
                    svg: this.canvas.toSVG(),
                    token: this.bixConfig.token
                }, function (ret, status, request) {

                    if (ret.error) {
                        UIkit.notify(this.$trans(ret.error), {status: 'danger'});
                    } else {

                        console.log(ret);
                        // set data on vm
                        this.$set('bixConfig.token', ret.token);
                        this.$set('pdf_path', ret.data.pdf_path);
                        this.$set('svg_path', ret.data.svg_path);
                        this.$set('extID', ret.data.extID);
                    }
                    this.spinning = false;

                }.bind(this)).error(function (data, status, request) {
                    this.spinning = false;
                    // handle error?
                }.bind(this));

                e.target.href = 'fh';

            }
        },

        watch: {
            /**
             * lookup external record
             * @param val
             */
            'projectID': function (val) {
                if (val) {
                    this.$http.get('get/' + val, function (ret, status, request) {

                        if (ret.data) {
                            this.$set('extID', ret.data.extID);
                            console.log(ret.data);
                        }
                    }).error(function (ret, status, request) {
                        // handle error
                    });
                }

            }

        }

    };

</script>