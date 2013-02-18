define('router', ['jquery'], function ($) {
    var registered = {},
        handleUnknown = function () {
            alert('unknown view');
        },
        defaultView = null;

    function registerRoute(options) {
        if (!options.name) {
            throw Error('name not defined');
        }
        if (!options.callback) {
            throw Error('callback not definied');
        }

        registered[options.name] = options.callback;

        if (options.isDefault) {
            defaultView = options;
        }
    }

    function activate() {
        var params = $.deparam.fragment();
        if (!params.view) {
            defaultView.callback($.extend({ view: defaultView.name }, params));
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
        if (!defaultView) {
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