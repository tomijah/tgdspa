define('jquery', function () { return window.jQuery; });
define('ko', function () { return window.ko; });
define('breeze', function() { return window.breeze; });
require.config({
    paths: { 'text': '../text' }
});

require(['router', 'viewLocator', 'ko', 'jquery'], function (router, viewLocator, ko, $) {

    function showView(params) {
        viewLocator.getView(params.view).then(function (view) {
            var $view = $(view.html);
            ko.applyBindings(view.viewModel, $view.get(0));
            view.viewModel.activate(params, function() {
                $('#app').html($view);
            });
        });
    }

    router.registerRoute({
        callback: showView,
        name: 'list',
        isDefault: true
    });

    router.registerRoute({
        callback: showView,
        name: 'details'
    });
    router.run();
});