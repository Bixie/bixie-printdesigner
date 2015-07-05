module.exports = function install(Vue) {

    var $bixConfig = window.$bixConfig || {csrf: '', url: '', prefix: 'bpd', saveStateDebounceTime: 750};
    /**
     * Libraries/plugins
     */

    Vue.use(require('vue-resource/src/index'));//must point to /src/index.js to work!
    Vue.use(require('./plugins/localstorage'));
    Vue.use(require('./plugins/layer'));
    //require('vue-validator');
    //require('./lib/globalize');
    require('./lib/trans')(Vue);
    require('./lib/filters')(Vue);


    /**
     * Components
     */

    //Vue.component('v-pagination', require('./components/pagination'));
    Vue.component('colorpicker', require('./components/colorpicker.vue'));

    /**
     * Directives
     */

    Vue.directive('confirm', require('./directives/confirm'));

    /**
     * Resource
     */

    Vue.url.options.root = $bixConfig.url;
    Vue.http.options.emulateHTTP = true;
    Vue.http.options.headers = {'X-XSRF-TOKEN': $bixConfig.csrf};

};