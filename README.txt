Before we start doing actual HTTP let's fake the network latency
by using `$timeout` service.

- Modify `todoList` service's getTodos method so that it returns
  a promise of list, that will resolve after a second.

- Modify the controller, so that it shows "Loading..." label
  unless the list of todos becomes available for display.
