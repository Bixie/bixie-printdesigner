module.exports = {

    template: '<input type="color" v-el="picker" id="{{ id }}" v-value="{{ modelValue }}" v-on="change: updateValue(this.type)" >',

    props: ['id', 'type', 'model-value', 'update-parent'],

    ready: function () {
        //this.$$.picker.value = this.$parent.$get(this.model);
        console.log(this.modelValue);
        console.log(this.type);
        console.log(this.updateParent);

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