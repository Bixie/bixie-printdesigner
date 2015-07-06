var _util = require('../lib/util'); //todo why is _ available, and _uitl not??

module.exports = {

    methods: {

        initState: function () {

            var activeDesign = this.$localstorage(this.bixConfig.prefix + '.activeDesign');
            this.debouncer = this._getSaveStateDebouncer();
            if (activeDesign && activeDesign !== '') {
                this.restoreState(JSON.parse(this.$localstorage(this.bixConfig.prefix + '.' + activeDesign) || '{}'));
            } else {
                this.saveState();
            }

        },

        saveState: function () {

            this.debouncer();

        },

        _getSaveStateDebouncer: function () {

            return _util.debounce(function () {

                this.$localstorage(this.bixConfig.prefix + '.activeDesign', this.projectID);
                this.$localstorage(this.bixConfig.prefix + '.' + this.projectID, JSON.stringify(this._toObject()));
                this.$broadcast('saved.bps.state');

            }.bind(this), this.bixConfig.saveStateDebounceTime || 1000);

        },

        restoreState: function (data) {

            if (data.projectID) {
                this._loadFromObject(data);
            }

        }
    }
};

