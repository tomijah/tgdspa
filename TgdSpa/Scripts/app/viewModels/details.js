define('viewModels/details', ['data', 'router'], function (data, router) {
    var DetailsViewModel = function () {
        this.note = ko.observable();
    };

    DetailsViewModel.prototype.activate = function (params, callback) {
        var that = this;
        data.getNote(params.id).then(function (response) {
            if (response.results.length > 0) {
                var note = response.results[0];
                that.note(note);
                callback();
            } else {
                router.go('list', {});
            }
        });
    };

    return new DetailsViewModel();
});