'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
    .module('todoApp', [
        'oauth',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/contacts', {
                templateUrl: 'views/contacts',
                controller: 'ContactsCtrl',
                controllerAs: 'contacts'
            })
            .when('/auth', {
                templateUrl: 'views/auth',
                controller: 'AuthCtrl',
                controllerAs: 'auth'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    });
