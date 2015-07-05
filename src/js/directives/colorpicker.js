module.exports = {

    twoWay: true,

    bind: function () {

        var el = UIkit.$(this.el);

        console.log(el);
        el.on('change.picker', function () {

            this.set(this.el.value);

            this.vm.updateValue('colorpicker');
        }.bind(this));

        el.val();
        //this.handler = function () {
            // set data back to the vm.
            // If the directive is bound as v-example="a.b.c",
            // this will attempt to set `vm.a.b.c` with the
            // given value.
            //this.set(this.el.value)
        //};

    },

    update: function (value) {
console.log(value,'hh');
        var el = UIkit.$(this.el);
        //if (undefined === value) {
        //    this.set('#ffffff');
        //    return;
        //}
        el.val(value);

    },

    unbind: function () {
        UIkit.$(this.el).off('.picker');
    }

};
