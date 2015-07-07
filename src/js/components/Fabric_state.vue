<template>
    <div class="uk-badge uk-panel-badge {{ badgeClass }}" v-show="badgeMessage">
        {{ badgeMessage }}
    </div>

    <button type="button" class="uk-button"
            v-confirm="clearProjectButton: confirmClear">
        <i class="uk-icon-times uk-margin-small-right"></i>{{ 'Wis project' | trans}}</button>

</template>

<script>

module.exports = {

    props: [],

    inherit: true,

    data: function () {
        return {
            badgeClass: '',
            badgeMessage: '',
            confirmClear: {
                t: 'Project wissen',
                m: 'Weet u zeker dat u dit project wilt wissen?'
            }
        };
    },

    ready: function () {

        this.$on('loaded.bps.canvas', function () {
            this.initState();
        }.bind(this));

        this.$on('set.bps.activelayer', function () {
            this.saveState();
        }.bind(this));

        this.$on('clear.bps.activelayer', function () {
            this.saveState();
        }.bind(this));

        this.$on('saved.bps.state', function () {
            this.setBadge('Project opgeslagen', 'uk-badge-success');
        }.bind(this));

    },
     methods: {
         clearProjectButton: function () {
             this.deactivateCanvas();
             this.$localstorage(this.bixConfig.prefix + '.activeDesign', '');
             this.$localstorage.remove(this.bixConfig.prefix + '.' + this.projectID);
             this.clearProject();
             this.setBadge('Project verwijderd', 'uk-badge-warning');
         },
         setBadge: function (message, cls) {
             this.badgeMessage = this.$trans(message);
             this.badgeClass = cls;
             setTimeout(this.clearBadge, 1200);
         },
         clearBadge: function () {
             this.badgeClass = '';
             this.badgeMessage = '';
         }
     }

};

</script>