For starters you can start modifying the `ng-repeat` expression, so that
all todos that are not done will appear on top of the list.

Then, we want a button saying `mark as done` next to each pending todo.
The decision on whether we should show the button can be made with
[ng-if](https://docs.angularjs.org/api/ng/directive/ngInclude)
When clicked this button should change todo state from pending to done.
You might want to add `accomplishTodo(todo)` method in `todoList` service
and `accomplishTodo(todo)` method on `todosController`'s scope.

Next, we would like to refactor our templates, so that we use
[ng-include](https://docs.angularjs.org/api/ng/directive/ngInclude)
inside the ng-repeat.

Finally we would like to create a `todoController`, that would be responsible
of controlling a single todo element. Make sure to move the accomplishTodo
method from `todosController` into `todoController`. Does it still need
to take todo as an argument?