'use strict';

/* Directives */


angular.module('blog.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }])
    .directive("sidebar", function() {
        return {
            restrict: "E",
            templateUrl: 'partials/sidebar.html'
        }
    })
    .directive("header", function() {
        return {
            restrict: "E",
            templateUrl: 'partials/header.html'
        }
    });
