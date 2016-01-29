angular.module('corelogic.controllers', [])
    .controller('todosController', ['$scope', function ($scope) {
        $scope.todos = [
            {text: "Learn angular", done: false},
            {text: "Learn JS", done: true},
            {text: "Become a master of LISP", done: false}
        ];
        $scope.editedTodo = {text: '', done: false};
        $scope.addTodo = function () {
            if (!$scope.editedTodo.text) { return; }
            $scope.todos.push($scope.editedTodo);
            $scope.editedTodo = {text: '', done: false};
        };
    }]);
