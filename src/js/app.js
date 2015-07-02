var Vue = require('vue'),
    UIkit = window.UIkit, //todo why can't I require UIKit/jQuery???
    _ = require('lodash');

Vue.use(require('./modules/layer'));

//Vue.use(require('vue-resource')); //todo throws error plugin.apply is not a function, see below
/**
 * if (typeof plugin.install === 'function') {
 *    plugin.install.apply(plugin, args)
 *  } else {
 *    plugin.apply(null, args)
 *  }
 */

new Vue({

    el: '#main',

    data: {
        currentView: 'designer-view'
    },

    components: {
        'designer-view': require('./views/designer')
    }
})