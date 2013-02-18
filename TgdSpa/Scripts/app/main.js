define('jquery', function () { return window.jQuery; });
define('ko', function () { return window.ko; });
define('breeze', function() { return window.breeze; });
require.config({
    paths: { 'text': '../text' },
    urlArgs: 'v=1'
});

require(['router', 'viewManager', 'data', 'bindings'], function (router, viewManager, data) {

    router.registerRoute({
        callback: viewManager.showView,
        name: 'list',
        isDefault: true
    });

    router.registerRoute({
        callback: viewManager.showView,
        name: 'details'
    });

    router.registerRoute({
        callback: viewManager.showView,
        name: 'edit'
    });

    data.initialize().then(function () {
        router.run();
    });
});