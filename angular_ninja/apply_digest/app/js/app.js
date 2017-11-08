'use strict';

var module = angular.module('myApp', []);

module.controller('TimeoutController', function($scope, $timeout) {
    $scope.fetchMessage = function() {
        $timeout(function() {
            $scope.message = 'Fetched after 3 seconds';
            console.log('message = ' + $scope.message);

        }, 3000);
    }

});
