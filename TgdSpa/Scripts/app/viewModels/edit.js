define('viewModels/edit', ['data', 'router'], function (data, router) {
    var EditViewModel = function () {
        var self = this;
        this.header = ko.observable('ble');
        this.note = ko.observable();

        this.saveNote = ko.asyncCommand({
            execute: function (callback) {
                var note = self.note();
                var validation = ko.validation.group(note);
                validation.showAllMessages(true);
                if (!note.isValid()) {
                    callback();
                    return;
                }

                if (!note.Id()) {
                    note.CreateDate(new Date());
                    data.addNote(note);
                }

                data.saveChanges(function () {
                    callback();
                    router.go('list', {});

                });
            }
        });

    };

    EditViewModel.prototype.activate = function (params, callback) {
        var that = this;
        if (!params.id) {
            this.header('Add note');
            var newNote = data.createNoteEntity();
            extendNote(newNote);
            this.note(newNote);
            callback();
            return;
        }

        data.getNote(params.id).then(function (response) {
            if (response.results.length > 0) {
                var note = response.results[0];
                extendNote(note);
                that.header('Edit note');
                that.note(note);
            } else {
                router.go('list', {});
            }
            callback();
        });

    };

    function extendNote(note) {
        note.Title.extend({ required: true });
        note.Content.extend({ required: true });
    }

    return new EditViewModel();
});