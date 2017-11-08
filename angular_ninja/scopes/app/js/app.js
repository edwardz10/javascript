'use strict';

var module = angular.module('myApp', ['myApp.controllers']);

module.run(function($rootScope) {
    $rootScope.title = 'Famous Books';
    $rootScope.name = 'Root scope';
});
