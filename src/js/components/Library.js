module.exports = {
    template: require('./library.template.html'),

    props: ['when-selected'],

    data: function () {
        return {
            images: [
                {
                    title: 'Image 1',
                    filename: 'image1.jpg',
                    src: 'images/Screenshot_51.png',
                    url: 'images/Screenshot_51.png'
                },
                {
                    title: 'Image 2',
                    filename: 'image2.jpg',
                    src: 'images/Screenshot_52.png',
                    url: 'images/Screenshot_52.png'
                }
            ],

            valid: false
        };
    },

    methods: {
        selectImage: function (image, e) {
            e.preventDefault();
            this.whenSelected(image);
        }
    }
};