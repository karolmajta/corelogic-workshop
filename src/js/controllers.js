angular.module('corelogic.controllers', ['corelogic.services'])
    .controller('todosController', ['$scope', 'todoList', function ($scope, todoList) {
        $scope.editedTodo = {text: '', done: false};
        $scope.saving = false;

        $scope.addTodo = function () {
            if (!$scope.editedTodo.text) { return; }
            $scope.saving = true;
            todoList.addTodo($scope.editedTodo)
              .finally(function () {
                $scope.editedTodo = {text: '', done: false};
                $scope.saving = false;
              });
        };

        todoList.getTodos().then(function (todos) {
          $scope.todos = todos;
        });
    }])

    .controller('todoController', ['$scope', 'todoList', function ($scope, todoList) {
        $scope.saving = false;

        $scope.accomplishTodo = function () {
            $scope.saving = true;
            todoList.accomplishTodo($scope.todo)
              .finally(function () { $scope.saving = false; });
        };
    }]);
