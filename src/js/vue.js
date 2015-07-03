module.exports = function install(Vue) {


    Vue.$bixConfig = window.$bixConfig || {csrf: '', url: ''};
    /**
     * Libraries/plugins
     */

    Vue.use(require('vue-resource/src/index'));//must point to /src/index.js to work!
    Vue.use(require('./lib/layer'));
    require('vue-validator');
    //require('./lib/globalize');
    require('./lib/trans')(Vue);
    require('./lib/filters')(Vue);


    /**
     * Components
     */

    //Vue.component('v-pagination', require('./components/pagination'));
    //Vue.component('v-loader', require('./components/loader.vue'));

    /**
     * Directives
     */


    Vue.directive('checkbox', require('./directives/checkbox'));

    /**
     * Resource
     */

    Vue.url.options.root = Vue.$bixConfig.url;
    Vue.http.options.emulateHTTP = true;
    Vue.http.options.headers = {'X-XSRF-TOKEN': Vue.$bixConfig.csrf};

};