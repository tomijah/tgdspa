define('viewResolver', ['jquery'], function ($) {
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
        require([getViewId(viewName), getViewModelId(viewName)], function(html, vm) {
            setTimeout(function() {
                deferred.resolve({ html: html, viewModel: vm });
            }, 1);
        });
        return deferred.promise();
    }

});