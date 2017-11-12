'use strict';

var spBloggerModule = angular.module('spBlogger', ['spBlogger.posts', 'spBlogger.posts.services', 'spBlogger.posts.controllers']);

spBloggerModule.run(function($state) {
    $state.go('allPosts');
});

