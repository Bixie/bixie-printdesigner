<template>
    <a href="" class="uk-button" v-on="click: exportDesign" download="{{ projectName | snake}}">
        <i class="uk-icon-download uk-margin-small-right"></i>{{ 'Exporteer' | trans }}</a>
</template>

<script>

module.exports = {

    props: [],

    inherit: true,

    ready: function () {

    },

    methods: {
        exportDesign: function (e) {
            this.canvas.discardActiveGroup();
            this.canvas.discardActiveObject();
            e.target.href = this.canvas.toDataURL();
            console.log(this.canvas.toSVG());

        }
    }

};

</script>