module.exports = function install(Vue) {

    console.log(window.$bixConfig.canvasOptions);
    window.$bixConfig = _.defaultsDeep(window.$bixConfig, {
        csrf: '',
        url: '',
        prefix: 'bpd',
        saveStateDebounceTime: 1000,
        locale: 'nl-NL',
        canvasOptions: {
            bgColor: '#ffffff',
            width: 420,
            height: 280
        }
    });
console.log(window.$bixConfig.canvasOptions);
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

    Vue.url.options.root = window.$bixConfig.url;
    Vue.http.options.emulateHTTP = true;
    Vue.http.options.headers = {'X-XSRF-TOKEN': window.$bixConfig.csrf};

};