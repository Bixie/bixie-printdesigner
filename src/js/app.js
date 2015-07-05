var Vue = require('vue'),
    UIkit = require('uikit/js/uikit'),//todo works here, but not for components
    //_util = require('./lib/util'),
    _ = require('lodash');
//setup
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