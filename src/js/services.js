angular.module('corelogic.services', [])

.factory('todoList', function () {
    var todos = [
        {text: "Learn angular", done: false},
        {text: "Learn JS", done: true},
        {text: "Become a master of LISP", done: false}
    ];
    return  {
        getTodos: function () { return todos; },
        addTodo: function (t) { todos.push(t); }
    };
});
