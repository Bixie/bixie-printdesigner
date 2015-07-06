<template>
    <div class="uk-badge uk-panel-badge {{ badgeClass }}" v-show="badgeMessage">
        {{ badgeMessage }}
    </div>

    <button type="button" class="uk-button"
            v-confirm="clearCanvas: confirmClear">
        <i class="uk-icon-times uk-margin-small-right"></i>{{ 'Wis design' | trans}}</button>

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
                t: 'Design wissen',
                m: 'Weet u zeker dat u dit design wilt wissen?'
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
            this.badgeClass = 'uk-badge-success';
            this.badgeMessage = this.$trans('Design opgeslagen');
            setTimeout(this.clearBadge, 1200);
        }.bind(this));

    },
     methods: {
         clearBadge: function () {
             this.badgeClass = '';
             this.badgeMessage = '';
         }
     }

};

</script>