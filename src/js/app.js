var Vue = require('vue'),
    UIkit = window.UIkit, //todo why can't I require UIKit/jQuery???
    _ = require('lodash');

Vue.use(require('./vue'));

new Vue({

    el: '#main',

    data: {
        currentView: 'designer-view'
    },

    components: {
        'designer-view': require('./views/designer')
    }
})