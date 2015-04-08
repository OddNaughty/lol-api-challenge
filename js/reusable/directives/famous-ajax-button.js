(function () {
    'use strict';
    
    angular
        .module('reusable-module.directives')
        .directive('famousAjaxButton', famousAjaxButton);
    
    famousAjaxButton.$inject = ["reusableUrl", "$famous"];
    
    function famousAjaxButton(reusableUrl, $famous) {
        return {
            scope: {
                callFunction: '&',
                pendingText: "@"
            },
            restrict: "E",
            transclude: true,
            templateUrl: reusableUrl + "directives-templates/famous-ajax-button.html",
//            compile: function (elem, attrs) {
//                if (!attrs.pendingText) {attrs.pendingText = "Searching...";}
//            },
            link: function ($scope, elem, attrs, ctrl, transclude) {
                // The transclude function to replace text.
                transclude(function(clone) {
                    $scope.transcluded = clone.html();
                    $scope.pending = clone.html();
                });
                
                var Transitionable = $famous['famous/transitions/Transitionable'],
                    Easing = $famous['famous/transitions/Easing'],
                    opacity = 0,
                    trans = {duration: 700, curve: Easing.outBounce};

                $scope.myTransition = new Transitionable(opacity);
                $scope.size = {
                    width: 150,
                    height: 50
                };
                $scope.envoiDuPate = doRequest;
                
                // Here goes the requesting function
                function doRequest () {
                    if ($scope.myTransition.isActive()) {
                        $scope.myTransition.halt();
                        return ;
                    }
                    $scope.pending = "Searching...";
                    opacity = opacity ? 0 : 1; 
                    $scope.myTransition.set(opacity, trans);
                    $scope.callFunction().then(function(d) {
                        if ($scope.myTransition.isActive()) {
                            $scope.myTransition.halt();
                        }
                        $scope.pending = $scope.transcluded;
                        opacity = opacity ? 0 : 1; 
                        $scope.myTransition.set(opacity, trans);
                    });
                };
            }
        };
    }
}());