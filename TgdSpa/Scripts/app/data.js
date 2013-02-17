define('data', ['breeze'], function (breeze) {

    var apiUrl = 'tgdspa/api/notes';
    var manager = new breeze.EntityManager(apiUrl);
    var operator = breeze.FilterQueryOp;

    var exports = {
        getAllNotes: getAllNotes
    };

    return exports;

    function getAllNotes(search) {
        var query = breeze.EntityQuery
            .from('Notes')
            .orderByDesc('CreateDate');
        if (search) {
            query = query.where('Title', operator.Contains, search);
        }
        query = query.select("Id, Title");
        return manager.executeQuery(query.take(20));
    }
});

