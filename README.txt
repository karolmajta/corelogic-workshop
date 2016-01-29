We no longer want to store our todo list on scope.
Create additional module `corelogic.services` and register a service,
or a factory (up to you), that will encapsulate this list.
The list should not be public, but should be exposed via a getter method
`getTodos()`. The service should also expose `addTodo(todo)` method that
will add the todo to list.

The controller should request the service via DI. Refactor the controller,
so that the application behaves exactly the same as before.