'use strict';

/* Controllers */

var postsControllersModule = angular.module('spBlogger.posts.controllers', []);

postsControllersModule.controller('PostController', ['$scope', 'postService', function($scope, postService) {
    $scope.getAllPosts = function() {
        return postService.getAll();
    }

    $scope.posts = $scope.getAllPosts();
}]);

postsControllersModule.controller('PostDetailsController', 
    ['$stateParams', '$state', '$scope', 'postService', function($stateParams, $state, $scope, postService) {
        
    $scope.getPostById = function(id) {
        return postService.getPostById(id);
    }

    $scope.closePost = function() {
        $state.go('allPosts');
    }

    $scope.singlePost = $scope.getPostById($stateParams.id);
}]);
