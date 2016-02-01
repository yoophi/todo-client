'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
    .controller('TodoCtrl', function (TodoService) {
        var todoList = this;
        todoList.todos = TodoService.getList();

        todoList.addTodo = function () {
            TodoService.create({
                text: todoList.todoText,
                done: false
            });
            todoList.todoText = '';
        };

        todoList.remaining = function () {
            return TodoService.getRemaining();
        };

        todoList.archive = function() {
            TodoService.archive();
            todoList.todos = TodoService.getList();
        }

    });
