angular.module('corelogic.services', ['ngStorage', 'restangular'])

.provider('todoList', [function () {
    var purge = false;
    var apiRoot = '';
    return {
        purgeDone: function (flag) { purge = flag; },
        setApiRoot: function (url) { apiRoot = url; },
        $get: ['Restangular', function (Restangular) {
            var todos;
            return  {
                getTodos: function () {
                  return Restangular.all('todos').getList().then(function (r) {
                    todos = r;
                    return todos;
                  });
                },
                addTodo: function (t) {
                    return Restangular.all('todos').post(t).then(function (r) {
                      todos.push(r);
                      return todos;
                    });
                },
                accomplishTodo: function (t) {
                    t.done = true;
                    return t.put().then(function (r) {
                        var idx = _.findIndex(todos, function (t) {
                          return t.id == r.id;
                        });
                        todos[idx] = r;
                        return todos;
                    });
                },
                removeTodo: function (t) {
                  return Restangular.one('todos', t.id).remove().then(function (r) {
                    var idx = _.findIndex(todos, function (todo) {
                      return t.id == todo.id;
                    });
                    todos.splice(idx, 1);
                    return todos;
                  });
                }
            };
        }]
    };
}])

.factory('networkErrorInterceptor', ['$q', function ($q) {
    return {
      responseError: function (err) {
        if (err.status <= 0) { alert('network error...'); }
        return $q.reject(err);
      }
    };
}])

.factory('todoStore', ['$localStorage', function ($localStorage) {
    return {
        get: function () { return $localStorage.todos || []; },
        persist: function (todoArray) { $localStorage.todos = todoArray; }
    };
}]);
