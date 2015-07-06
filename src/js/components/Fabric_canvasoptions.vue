<template>
    <div class="uk-form-row">
        <label class="uk-form-label" for="canvasoptions-height">{{ 'Hoogte canvas' | trans}}</label>
        <div class="uk-form-controls">
            <input type="number" class="uk-text-right uk-form-width-small uk-form-blank" id="canvasoptions-height"
                   v-model="canvasOptions.height" number>
        </div>
    </div>
    <div class="uk-form-row">
        <label class="uk-form-label" for="canvasoptions-width">{{ 'Breedte canvas' | trans}}</label>
        <div class="uk-form-controls">
            <input type="number" class="uk-text-right uk-form-width-small uk-form-blank" id="canvasoptions-width"
                   v-model="canvasOptions.width" number>
        </div>
    </div>

</template>

<script>

module.exports = {

    props: [],

    inherit: true,

    ready: function () {

    },

    methods: {

    }

};

</script>