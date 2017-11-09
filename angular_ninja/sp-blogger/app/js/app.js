'use strict';


// Declare app level module which depends on filters, and services
var module = angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]);

module.config(function($routeProvider) {
    $routeProvider.when('/view1', {
            controller: 'Controller1',
            templateUrl: 'partials/view1.html'
        }).when('/view2/:firstname/:lastname', {
            controller: 'Controller2',
            templateUrl: 'partials/view2.html'
        }).otherwise({redirectTo: '/view1'});
});

