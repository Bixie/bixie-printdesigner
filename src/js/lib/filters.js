module.exports = function (Vue) {

    Vue.filter('baseUrl', function (url) {
        return _.startsWith(url, Vue.url.options.root) ? url.substr(Vue.url.options.root.length) : url;
    });

    Vue.filter('trans', function (id, parameters, domain, locale) {
        return this.$trans(id, parameters, domain, locale);
    });

    Vue.filter('snake', function (str) {
        return _.snakeCase(str);
    });

    //Vue.filter('transChoice', function (id, number, parameters, domain, locale) {
    //    return this.$transChoice(id, number, parameters, domain, locale);
    //});
    //
    //Vue.filter('date', function (date, format) {
    //    return this.$date(date, format);
    //});
    //
    //Vue.filter('toOptions', function toOptions(collection) {
    //    return collection ? Object.keys(collection).map(function (key) {
    //
    //        var op = collection[key];
    //        if (typeof op === 'string') {
    //            return {text: op, value: key};
    //        } else {
    //            return {label: key, options: toOptions(op)};
    //        }
    //
    //    }) : [];
    //});
    //
    //Vue.filter('trim', {
    //
    //    write: function (val) {
    //        return val.trim();
    //    }
    //
    //});
    //
    //Vue.filter('relativeDate', function (value, reference) {
    //    try {
    //        return this.$relativeDate(value, reference);
    //    } catch (e) {
    //        return 'NaN';
    //    }
    //});

};
