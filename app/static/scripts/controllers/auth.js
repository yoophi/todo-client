'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('AuthCtrl', function ($scope, $rootScope, Storage, $timeout, AccessToken, EndpointConfigService) {
        var auth = this;
        auth.site = EndpointConfigService.getUrl('');
        auth.profile_url = EndpointConfigService.getUrl('/me');
        var storage_token = Storage.get('token');
        if (storage_token) {
            $scope.accessToken = storage_token.access_token;
        }

        $scope.$on('oauth:login', function (event, token) {
            $rootScope.accessToken = token.access_token;
            $scope.accessToken = token.access_token;
        });

        $scope.$on('oauth:logout', function (event) {
            $rootScope.accessToken = null;
            $scope.accessToken = null;
        });
    });