module.exports = {

    template: require('./designer.template.html'),

    data: function () {
        return {
            activeImage: {
                src: false
            },
            cost: 50,
            discount: 0
        };
    },

    components: {
        library: require('../components/Library')
    },

    filters: {
        coupon: function (cost) {
            return cost - (this.discount / 100 * cost);
        }
    },

    methods: {
        setActiveImage: function (image) {
            this.activeImage = image;
        },
        applyDiscount: function (discount) {
            this.discount = discount;
        }
    }
};