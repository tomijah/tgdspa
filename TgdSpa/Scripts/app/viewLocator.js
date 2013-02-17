define('viewLocator', ['jquery'], function ($) {
    return {
        getView: getView
    };

    function getViewId(viewName) {
        return 'text!views/' + viewName + '.html';
    }

    function getViewModelId(viewName) {
        return 'viewModels/' + viewName;
    }

    function getView(viewName) {
        var deferred = $.Deferred();
        require([getViewId(viewName), getViewModelId(viewName)], function (html, vm) {
            console.log(vm);
            deferred.resolve({ html: html, viewModel: vm });
        });
        return deferred.promise();
    }

});