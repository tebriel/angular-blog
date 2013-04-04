'use strict';

/* Controllers */

function PostListCtrl($scope, $http) {
    $http.get('posts.json').success(function(data) {
        $scope.posts = data;
    });

    $scope.orderProp = 'postIndex';
    $scope.reverse = true;
}
//PostListCtrl.$inject = ['$scope', '$http'];

function PostDetailCtrl($scope, $routeParams, $http) {
    $http.get('posts.json').success(function(data) {
        for(var idx = 0; idx < data.length; idx++) {
            if (data[idx].postName == $routeParams.postName) {
                $scope.post = data[idx];
                break;
            }
        }
    });
}
//PostDetailCtrl.$inject = ['$scope', '$routeParams', '$http', '_'];

function SidebarCtrl($scope, $http) {
    $http.get('sidebar.json').success(function(data) {
        $scope.methods = data;
    });
    $scope.orderProp = 'itemIndex';
    $scope.reverse = false;
}
//SidebarCtrl.$inject = ['$scope', '$http'];
