Refactor `todoList` service, so that `accomplishTodo` method uses `$http.put`
and persists the done todo on the server.

Make sure that "mark as done" buttion is disabled during the save.

Reuse the closure of `todos` in `todoList`.
