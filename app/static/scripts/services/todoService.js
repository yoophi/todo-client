'use strict';

/**
 * @ngdoc service
 * @name todoApp.TodoService
 * @description
 * # TodoService
 * Service in the todoApp.
 */
angular.module('todoApp')
    .service('TodoService', function ($http, Storage, AccessToken) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var service = this;

        var storage_token = Storage.get('token');
        var access_token = storage_token.access_token;
        if (storage_token) {
            console.log(access_token);
        }

        service.todos = [
        ];

        service.all = function () {
            var promise = $http.get('http://localhost:5000/api/v1.0/todos',
                {headers: headers()}
            );
            promise.success(function (response) {
                console.log(response);
                service.todos = response.todos;
            });
            return promise;
        };

        service.create = function (obj) {
            var promise = $http.post('http://localhost:5000/api/v1.0/todos',
                obj,
                {headers: headers()}
            );
            promise.success(function (response) {
                console.log(response);
                service.todos = response.todos;
            });
            return promise;
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
                if (!todo.is_completed) {
                    service.todos.push(todo);
                }
            });

            return service.todos;
        };

        service.update = function (obj) {
            console.log('service.update()')
            console.log('headers', headers())
            var promise = $http.put('http://localhost:5000/api/v1.0/todo/' + obj.id,
                {
                    'title': obj['title'],
                    'priority': obj['priority'],
                    'is_completed': obj['is_completed']
                },
                {headers: headers()}
            );
            promise.success(function (response) {
                console.log(response);
            });
            return promise;
        };

        var headers = function () {
            if (access_token) {
                return {Authorization: 'Bearer ' + access_token};
            }

            return {};
        };
    });

