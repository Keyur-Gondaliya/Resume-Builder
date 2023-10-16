$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $("body").toggleClass("open-menu")
    })



    // Ck Editor Start
    ClassicEditor
        .create(document.querySelector('#editor1'))
        .catch(error => {
            console.error(error);
        });
    // Ck Editor End


    // Ck Editor Start
    ClassicEditor
        .create(document.querySelector('#editor2'))
        .catch(error => {
            console.error(error);
        });
    // Ck Editor End


    // Range Slider Start      
    var app = angular.module('ranger', []);

    app.directive('rangeSlider', ['$parse',
        function($parse) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {

                    var parsed = {
                            modelFromFn: $parse(attrs.modelFrom),
                            modelToFn: $parse(attrs.modelTo)
                        },
                        isUpdating = false,
                        isFirstStart = true;

                    var getOptions = function() {
                        return scope.$eval(attrs.rangeOptions);
                    };

                    var update = function(action, apply) {
                        if (isUpdating) return;

                        isUpdating = true;
                        try {
                            action();
                        } finally {
                            if (apply) {
                                try {
                                    scope.$apply();
                                } catch (e) {}
                            }
                            isUpdating = false;
                        }
                    };

                    var initSlider = function() {
                        var opts = angular.extend({
                                min: 0,
                                max: 10000,
                                type: 'double',
                                prefix: "$",
                                prettify: true,
                                hasGrid: true
                            }, getOptions()),
                            onSliderChanged = angular.noop;

                        if (typeof opts.onSliderChanged == 'function') {
                            onSliderChanged = opts.onSliderChanged;
                            delete opts.onSliderChanged;
                        }

                        opts.from = parsed.modelFromFn(scope) || 0;
                        opts.to = parsed.modelToFn(scope) || 1000;
                        opts.onFinish = function(data) {
                            update(function() {
                                parsed.modelFromFn.assign(scope, data.fromNumber);
                                parsed.modelToFn.assign(scope, data.toNumber);
                                onSliderChanged(angular.copy(opts));
                                console.log('slider changed');
                            }, true);
                        };
                        update(function() {
                            element.ionRangeSlider(opts);
                        });
                    };

                    initSlider();

                    scope.$watch(getOptions, function(newValue, oldValue) {
                        delete newValue.onSliderChanged;
                        if (isFirstStart) {
                            isFirstStart = false;
                            return;
                        }

                        update(function() {
                            element.ionRangeSlider('update', newValue);
                        });
                    }, true);

                    scope.$watch(attrs.modelFrom, function(newValue, oldValue) {
                        if (newValue == oldValue) return;
                        update(function() {
                            element.ionRangeSlider('update', { from: newValue });
                        });
                    });

                    scope.$watch(attrs.modelTo, function(newValue, oldValue) {
                        if (newValue == oldValue) return;
                        update(function() {
                            element.ionRangeSlider('update', { to: newValue });
                        });
                    });
                }
            };
        }
    ]);
    //Presets
    app.controller('MainCtrl', function($scope) {
        $scope.priceFrom = 0;
        $scope.priceTo = 4000;

        $scope.rangeOptions = {
            min: 0,
            max: 5000,
            step: 100,
            onSliderChanged: function(data) {
                console.log(data);
            }
        }

        $scope.setStep = function(value) {
            $scope.rangeOptions.step = Number(value);
        };

        $scope.setFromValue = function(value) {
            $scope.priceFrom = Number(value);
        };

        $scope.setToValue = function(value) {
            $scope.priceTo = Number(value);
        };
    });
    // Range Slider End



    Scrollbar.initAll();
})