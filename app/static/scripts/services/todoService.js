'use strict';

/**
 * @ngdoc service
 * @name todoApp.TodoService
 * @description
 * # TodoService
 * Service in the todoApp.
 */
angular.module('todoApp')
    .service('TodoService', function () {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var service = this;

        service.todos = [
            {text: 'learn angular', done: true},
            {text: 'build an angular app', done: false},
            {text: 'foo', done: false},
            {text: 'bar', done: true}
        ];

        service.getList = function () {
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
