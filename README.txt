Refactor `todoList` service, so that `addTodo` method uses `$http.post`
and persists the new todo on the server.

Make sure, that "Add" button remains disabled when making a request.

Reuse the closure of `todos` in `todoList`.
