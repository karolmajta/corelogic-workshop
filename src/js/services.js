angular.module('corelogic.services', ['ngStorage'])

.factory('todoList', ['todoStore', function (todoStore) {
    var todos = todoStore.get();
    return  {
        getTodos: function () { return todos; },
        addTodo: function (t) {
            todos.push(t);
            todoStore.persist(todos);
        },
        accomplishTodo: function (t) {
            var index = todos.indexOf(t);
            if (index != -1) {
                todos[index].done = true;
            }
            todoStore.persist(todos);
        }
    };
}])

.factory('todoStore', ['$localStorage', function ($localStorage) {
    return {
        get: function () { return $localStorage.todos || []; },
        persist: function (todoArray) { $localStorage.todos = todoArray; }
    };
}]);
