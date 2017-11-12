'use strict';

var spBloggerPostsModule = angular.module('spBlogger.posts', ['ui.router']);

spBloggerPostsModule.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('allPosts', {
        url: '/posts',
        templateUrl: 'modules/posts/views/posts.html',
        controller: 'PostController'
    });

    $stateProvider.state('singlePost', {
        url: '/posts/:id/:permalink',
        templateUrl: 'modules/posts/views/singlePost.html',
        controller: 'PostDetailsController'
    });

//    $urlRouterProvider.otherwise('/posts');
});

