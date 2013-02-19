define('jquery', function () { return window.jQuery; });
define('ko', function () { return window.ko; });
define('breeze', function() { return window.breeze; });
require.config({
    paths: { 'text': '../text' }
});

require(['router', 'viewManager', 'data'], function (router, viewManager, data) {

    router.registerRoute({
        action: viewManager.showView,
        name: 'list',
        isDefault: true
    });

    router.registerRoute({
        action: viewManager.showView,
        name: 'details'
    });

    router.registerRoute({
        action: viewManager.showView,
        name: 'edit'
    });

    data.initialize().then(function () {
        router.run();
    });
});