module.exports = function (options) {
    var onConfirm = this.vm[this.arg] || function (e, button) {console.log('No onConfirm bound'); },
        title = this.vm.$trans(options.t),
        message = this.vm.$trans(options.m);

    this.el.addEventListener('click', function (e) {
        var button = this;
        UIkit.modal.confirm('<h3 class="uk-modal-header">' + title + '</h3><p>' + message + '</p>', function () {
            onConfirm(e, button);

        }, {bgClose: false, center: true, labels: {'Ok': options.ok || 'Ok', 'Cancel': options.cancel || 'Annuleren'}});

    });

};