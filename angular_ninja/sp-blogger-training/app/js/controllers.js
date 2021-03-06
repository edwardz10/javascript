'use strict';

/* Controllers */

var myAppControllersModule = angular.module('myApp.controllers', []);

myAppControllersModule.controller('Controller1', function($scope, $state) {
    $scope.loadView2 = function() {
        $state.go('view2', {
            firstname: $scope.firstname,
            lastname: $scope.lastname
        });
    }
});

myAppControllersModule.controller('Controller2', function($scope, $stateParams, names) {
    $scope.firstname = $stateParams.firstname;
    $scope.lastname = $stateParams.lastname;
    $scope.names = names;
});

