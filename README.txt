You probably noticed, that we loose the state of todo list
when reloading page. We want to have persistence.

Install [ngStorage](https://github.com/gsklee/ngStorage) via bower
(remember to save it as a dependency with --save flag).

Create a `todoStore` service or factory (again, up to you) that
will depend on `$localStorageService`.


`todoStore` should expose methods:
    - `get()` - that will get the list from local storage `todos` key.
      If not present should return empty list.
    - `persist(arrayOfTodos)` - that will persist the given array in local
      storage under `todos` key.

`todoList` should depend on `todoStore`. During injection it should use its
`get` method to query for initial list of todos. After every update it should
call `persist` with a new value for storing in the localstorage.