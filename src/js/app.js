var Vue = require('vue'),
    _ = require('lodash');

//Vue.use(require('vue-resource'));

new Vue({
    el: '#main',

    data: {
        currentView: 'designer-view'
    },

    components: {
        'designer-view': require('./views/designer')
    }
})