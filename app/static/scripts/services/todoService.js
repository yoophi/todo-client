'use strict';

/**
 * @ngdoc service
 * @name todoApp.TodoService
 * @description
 * # TodoService
 * Service in the todoApp.
 */
angular.module('todoApp')
    .service('TodoService', function ($http, Storage) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var service = this;

        var storage_token = Storage.get('token');
        if (storage_token) {
            console.log(storage_token.access_token);
        }

        service.todos = [
            {text: 'learn angular', done: true},
            {text: 'build an angular app', done: false},
            {text: 'foo', done: false},
            {text: 'bar', done: true}
        ];

        service.getList = function () {
            $http.get('http://localhost:5000/api/v1.0/todos').success(function (response) {
                console.log(response.todos);
            });
            return service.todos;

        };

        service.create = function (obj) {
            service.todos.push(obj);
        };

        service.getRemaining = function () {
            var count = 0;
            angular.forEach(service.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });

            return count;
        };

        service.archive = function () {
            var old_todos = service.todos;
            service.todos = [];
            angular.forEach(old_todos, function (todo) {
                if (!todo.done) {
                    service.todos.push(todo);
                }
            });
        };
    });

//profileClient.factory('Profile', ['$http', 'AccessToken', '$rootScope', function($http, AccessToken, $rootScope) {
//  var service = {};
//  var profile;
//
//  service.find = function(uri) {
//    var promise = $http.get(uri, { headers: headers() });
//    promise.success(function(response) {
//        profile = response;
//        $rootScope.$broadcast('oauth:profile', profile);
//      });
//    return promise;
//  };
//
//  service.get = function() {
//    return profile;
//  };
//
//  service.set = function(resource) {
//    profile = resource;
//    return profile;
//  };
//
//  var headers = function() {
//    return { Authorization: 'Bearer ' + AccessToken.get().access_token };
//  };
//
//  return service;
//}]);
