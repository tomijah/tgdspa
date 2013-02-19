define('router', ['jquery'], function ($) {
    var registered = {},
        handleUnknown = function () {
            alert('unknown view');
        },
        defaultRoute = null;

    function registerRoute(options) {
        if (!options.name) {
            throw Error('name not defined');
        }
        if (!options.action) {
            throw Error('action not definied');
        }

        registered[options.name] = options.action;

        if (options.isDefault) {
            defaultRoute = options;
        }
    }

    function activate() {
        var params = $.deparam.fragment();
        if (!params.view) {
            defaultRoute.action($.extend({ view: defaultRoute.name }, params));
            return;
        }
        if (registered[params.view]) {
            registered[params.view](params);
        } else {
            handleUnknown(params);
        }
    }

    function go(view, params) {
        $.bbq.pushState($.extend({ view: view }, params), 2);
    }

    function run() {
        if (!defaultRoute) {
            throw Error('default view not specified');
        }
        
        $(window).bind('hashchange', activate);
        activate();
    }

    return {
        registerRoute: registerRoute,
        run: run,
        go: go
    };
});