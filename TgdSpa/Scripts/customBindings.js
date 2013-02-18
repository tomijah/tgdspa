(function (ko, $) {

    var visibleState = {
        height: '90px'
    };

    var hiddenState = {
        height: 0
    };

    ko.bindingHandlers.slideBinding = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var value = ko.utils.unwrapObservable(valueAccessor());

            $(element).css(value ? visibleState : hiddenState);
        },
        update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var value = ko.utils.unwrapObservable(valueAccessor()), allBindings = allBindingsAccessor(),
                duration = allBindings.slideDuration || 150;

            $(element).stop();
            $(element).animate(value ? visibleState : hiddenState, duration);
        }
    };

})(window.ko, window.jQuery);