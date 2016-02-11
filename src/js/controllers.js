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

    .controller('todoController', ['$scope', '$timeout', 'todoList',
      function ($scope, $timeout, todoList) {

        $scope.saving = false;
        $scope.deleteTimeout = null;

        $scope.accomplishTodo = function () {
            $scope.saving = true;
            todoList.accomplishTodo($scope.todo)
              .finally(function () { $scope.saving = false; });
        };

        $scope.removeTodo = function () {
            $scope.deleteTimeout = $timeout(function () {
              $scope.saving = true;
              todoList.removeTodo($scope.todo)
                .finally(function () { $scope.saving = false; });
            }, 5000);
        };

        $scope.cancelRemove = function () {
          $timeout.cancel($scope.deleteTimeout);
          $scope.deleteTimeout = null;
        };
    }]);
