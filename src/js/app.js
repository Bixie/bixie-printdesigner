var Vue = require('vue'),
    UIkit = require('uikit/js/uikit'),//todo works here, but not for components
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