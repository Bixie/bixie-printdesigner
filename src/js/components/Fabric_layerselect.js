module.exports = {

    template: require('../templates/fabric_layerselect.template.html'),

    inherit: true,

    data: function () {
        return {
        };
    },

    load: function () {
        //require('uikit/js/components/sortable'); //todo

    },

    ready: function () {
        var $this = this;

        UIkit.init(this.$el);

        UIkit.$(this.$el).on('change.uk.sortable', function (e, sortable, ele, mode) {

            if (!mode || ['moved', 'added'].indexOf(mode) === -1) {
                return;
            }

            ele = UIkit.$(ele);

            //tricky part is that ordering is reverse of object array. Last in array is top layer
            var newOrdering = ($this.layers.length -  ele.index()),
                layerId   = ele.data('id'),
                layer = _.find($this.layers, 'id', layerId),
                diff = newOrdering - layer.ordering,
                fnName = diff < 0 ? 'sendBackwards' : 'bringForward',
                moves;

            for (moves = 0; moves < Math.abs(diff); moves += 1) {
                $this.canvas[fnName](layer.fObj, false);
            }
            //set layers ordering todo move to parent, but what about sortable (DOM)
            sortable.element.children().each(function (j, child) {
                child = UIkit.$(child);
                _.find($this.layers, 'id', child.data('id')).ordering = ($this.layers.length - child.index());
            });

        });
    },

    methods: {

        removeLayer: function (layer) {
            this._removeLayer(layer);
        },

        selectLayer: function (layer) {
            if (this.activeId === layer.id) {
                return;
            }
            this.activeLayerId = layer.id;
        }
    }
};