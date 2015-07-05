<template>
    <input type="color" v-el="picker" id="{{ id }}" v-on="change: updateValue(this.type)" >
</template>

<script>

module.exports = {

    props: ['id', 'type', 'model-value', 'update-parent'],

    ready: function () {
        this.$on('set.bps.activelayer', function (layerID) {
            this.$$.picker.value = this.modelValue;
        }.bind(this));
    },

    methods: {
        updateValue: function (type) {

            this.modelValue = this.$$.picker.value;
            console.log(type, this.modelValue);
            this.updateParent(type, this.modelValue); //todo why can't this be bound to a getter/setter in $parent

        }
    }

};

</script>