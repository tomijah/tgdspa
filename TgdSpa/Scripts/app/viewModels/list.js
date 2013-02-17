define('viewModels/list', ['ko', 'data'], function (ko, data) {

    function ListViewModel() {
        this.filter = ko.observable('');
        this.notes = ko.observableArray();
    }

    ListViewModel.prototype.search = function () {
        alert(this.filter());
    };

    ListViewModel.prototype.showDetails = function (note) {
        alert(note.Id);
    };

    ListViewModel.prototype.activate = function (param, callback) {
        var that = this;
        data.getAllNotes(this.filter()).then(function (response) {
            callback();
            response.results.forEach(function (item) {
                that.notes.push(item);
            });

        });
    };

    return new ListViewModel();
});