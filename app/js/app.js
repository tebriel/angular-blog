'use strict';

// Load up _.js
angular
    .module('underscore', [])
    .factory('_', function() {
        return window._;
    });

// Declare app level module which depends on filters, and services
angular.module('blog', ['myApp.filters', 'myApp.services', 'myApp.directives', 'underscore']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/posts', {templateUrl: 'partials/post-list.html', controller: PostListCtrl});
    $routeProvider.when('/posts/:postName', {templateUrl: 'partials/post-detail.html', controller: PostDetailCtrl})
    $routeProvider.otherwise({redirectTo: '/posts'});
  }]);

