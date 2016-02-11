angular.module('corelogic.services', ['ngStorage'])

.provider('todoList', [function () {
    var purge = false;
    var apiRoot = '';
    return {
        purgeDone: function (flag) { purge = flag; },
        setApiRoot: function (url) { apiRoot = url; },
        $get: ['$http', 'todoStore', function ($http, todoStore) {
            var todos;
            return  {
                getTodos: function () {
                  return $http.get(apiRoot + '/todos/').then(function (r) {
                    todos = r.data;
                    return todos;
                  });
                },
                addTodo: function (t) {
                    return $http.post(apiRoot + '/todos/', t).then(function (r) {
                      todos.push(r.data);
                      return todos;
                    });
                },
                accomplishTodo: function (t) {
                    var doneTodo = _.extend({}, t, {done: true});
                    return $http.put(apiRoot + '/todos/' + t.id, doneTodo).then(function (r) {
                        var idx = _.findIndex(todos, function (t) {
                          return t.id == r.data.id;
                        });
                        todos[idx] = r.data;
                        return todos;
                    });
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
