define('viewModels/list', ['ko', 'data', 'router'], function (ko, data, router) {

    var ListViewModel = function () {
        var self = this;
        this.filter = ko.observable('');
        this.notes = ko.observableArray();
        this.menuVisible = ko.computed(function () {
            return self.getSelected().length > 0;
        });
        this.editNoteVisible = ko.computed(function () {
            return self.getSelected().length == 1;
        });
    };

    ListViewModel.prototype.getSelected = function () {
        return this.notes().filter(function (item) {
            return item.selected();
        });
    };

    ListViewModel.prototype.performSearch = function (callback) {
        var that = this;
        data.getAllNotes(this.filter()).then(function (response) {
            that.notes.removeAll();
            response.results.forEach(function (item) {
                extentNote(item);
                that.notes.push(item);
            });
            if (callback)
                callback();
        });
    };

    ListViewModel.prototype.search = function () {
        this.performSearch();
    };

    ListViewModel.prototype.showDetails = function (note) {
        router.go('details', { id: note.Id });
    };

    ListViewModel.prototype.activate = function (param, callback) {
        this.performSearch(callback);
    };

    ListViewModel.prototype.deleteSelected = function () {
        this.notes.remove(function (note) {
            if (note.selected()) {
                note.entityAspect.setDeleted();
            }

            return note.selected();
        });

        data.saveChanges(this.performSearch);
    };

    ListViewModel.prototype.addNote = function () {
        router.go('edit', {});
    };

    ListViewModel.prototype.edit = function () {
        var selected = this.getSelected();
        if (selected.length == 1) {
            router.go('edit', { id: selected[0].Id });
        }
    };

    function extentNote(note) {
        note.selected = ko.observable(false);
        note.toggleSelect = function () {
            this.selected(!this.selected());
        };
    }

    return new ListViewModel();
});