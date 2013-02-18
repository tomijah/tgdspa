define('viewManager', ['viewResolver', 'ko', 'jquery'], function (viewResolver, ko, $) {

    var initState = {
        marginLeft: '20px',
        marginRight: '-20px',
        opacity: 0,
        display: 'block'
    };

    var endState = {
        marginRight: 0,
        marginLeft: 0,
        opacity: 1
    };

    function makeEntranceAnimation($view) {
        $view.css(initState);
        $view.animate(endState, 300, 'swing');
    }

    function showView(params) {
        viewResolver.getView(params.view).then(function (view) {
            var $view = $(view.html);
            view.viewModel.activate(params, function () {
                ko.cleanNode($('#app').get(0));
                ko.applyBindings(view.viewModel, $view.get(0));
                $('#app').html($view);
                makeEntranceAnimation($view);
            });
        });
    }
    
    return {
        showView: showView
    };
});