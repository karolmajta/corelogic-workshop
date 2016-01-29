angular.module('corelogic.controllers', ['corelogic.services'])
    .controller('todosController', ['$scope', 'todoList', function ($scope, todoList) {
        $scope.todos = todoList.getTodos();
        $scope.editedTodo = {text: '', done: false};
        $scope.addTodo = function () {
            if (!$scope.editedTodo.text) { return; }
            todoList.addTodo($scope.editedTodo);
            $scope.editedTodo = {text: '', done: false};
        };
    }])

    .controller('todoController', ['$scope', 'todoList', function ($scope, todoList) {
        $scope.accomplishTodo = function () {
            todoList.accomplishTodo($scope.todo);
        };
    }]);
