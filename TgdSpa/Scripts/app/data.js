define('data', ['breeze'], function (breeze) {

    var apiUrl = 'api/notes';
    var manager = new breeze.EntityManager(apiUrl);
    var operator = breeze.FilterQueryOp;
    var isSaving = false;

    function getAllNotes(search) {
        var query = breeze.EntityQuery
            .from('Notes')
            .orderByDesc('Id');
        if (search) {
            query = query.where('Title', operator.Contains, search);
        }
        return manager.executeQuery(query.take(30));
    }

    function getNote(id) {
        var query = breeze.EntityQuery
            .from('Notes')
            .where('Id', operator.Equals, id);
        return manager.executeQuery(query.take(1));
    }

    function addNote(note) {
        return manager.addEntity(note);
    }

    function createNoteEntity(initialValues) {
        var todoType = manager.metadataStore.getEntityType("Note");
        return todoType.createEntity(initialValues);
    }

    function saveChanges(successCallback, failedCallback) {
        if (manager.hasChanges()) {
            if (isSaving) {
                return;
            }
            isSaving = true;
            manager.saveChanges()
                .then(successCallback)
                .fail(failedCallback)
                .fin(saveFinished);
        } else {
            successCallback();
        }
    }

    function saveFinished() { isSaving = false; }

    function initialize() {
        return manager.fetchMetadata();
    }

    return {
        getAllNotes: getAllNotes,
        getNote: getNote,
        saveChanges: saveChanges,
        addNote: addNote,
        createNoteEntity: createNoteEntity,
        initialize: initialize
    };

});

