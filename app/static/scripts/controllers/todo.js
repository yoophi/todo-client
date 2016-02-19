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
        todoList.todos = [];


        todoList.getTodos = function () {
            TodoService.all().then(function (result) {
                console.log(result);
                todoList.todos = result.data.todos;
                console.log(todoList.todos);
            })
        };

        todoList.addTodo = function () {
            TodoService.create({
                title: todoList.todoText,
                done: false
            }).then(function (result) {
                todoList.todoText = '';
                todoList.getTodos();
            });
        };

        todoList.remaining = function () {
            return TodoService.getRemaining();
        };

        todoList.archive = function () {
            todoList.todos = TodoService.archive();
            //todoList.getTodos();
        };

        todoList.updateTodo = function (obj) {
            TodoService.update(obj).then(function(result){
                todoList.getTodos();
            })
        };

        todoList.getTodos();

    });
