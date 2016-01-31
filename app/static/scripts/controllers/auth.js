'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('AuthCtrl', function ($scope, $rootScope, $timeout, AccessToken) {
        $scope.$on('oauth:login', function (event, token) {
            $rootScope.accessToken = token.access_token;
            $scope.accessToken = token.access_token;
        });

        $scope.$on('oauth:logout', function (event) {
            $rootScope.accessToken = null;
            $scope.accessToken = null;
        });
    });