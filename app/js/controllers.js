'use strict';

/* Controllers */

var PostListCtrl = function ($scope, $http, $log) {
    $http.get('posts.json').success(function(data) {
        if (data == null) {
            $log.error("Couldn't load posts");
        }
        $scope.posts = data;
    });

    $scope.orderProp = 'postIndex';
    $scope.reverse = true;
}

var PostDetailCtrl = function ($scope, $routeParams, $http) {
    $http.get('posts.json').success(function(data) {
        for(var idx = 0; idx < data.length; idx++) {
            if (data[idx].postName == $routeParams.postName) {
                $scope.post = data[idx];
                break;
            }
        }
    });
}

var SidebarCtrl = function ($scope, $http) {
    $http.get('sidebar.json').success(function(data) {
        $scope.methods = data;
    });
    $scope.orderProp = 'itemIndex';
    $scope.reverse = false;
}

angular.module('Blog.controllers', [])
    .controller('PostListCtrl', ['$scope', '$http', '$log', PostListCtrl])
    .controller('PostDetailCtrl', ['$scope', '$routeParams', '$http', PostDetailCtrl])
    .controller('SidebarCtrl', ['$scope', '$http', SidebarCtrl])
