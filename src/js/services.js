angular.module('corelogic.services', ['ngStorage'])

.provider('todoList', [function () {
    var purge = false;
    var apiRoot = '';
    return {
        purgeDone: function (flag) { purge = flag; },
        setApiRoot: function (url) { apiRoot = url; },
        $get: ['$http', 'todoStore', function ($http, todoStore) {
            var todos;
            if (!purge) {
                todos = todoStore.get();
            } else {
                todos = todoStore.get().filter(function (t) { return !t.done; });
                todoStore.persist(todos);
            }
            return  {
                getTodos: function () {
                  return $http.get(apiRoot + '/todos/').then(function (r) {
                    return r.data;
                  });
                },
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
        }]
    };
}])

.factory('todoStore', ['$localStorage', function ($localStorage) {
    return {
        get: function () { return $localStorage.todos || []; },
        persist: function (todoArray) { $localStorage.todos = todoArray; }
    };
}]);
