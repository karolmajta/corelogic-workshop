You probably noticed, that we loose the state of todo list
when reloading page. We want to have persistence.

Install [ngStorage](https://github.com/gsklee/ngStorage) via bower
(remember to save it as a dependency with --save flag).

Create a `todoStore` service or factory (again, up to you) that
will depend on `$localStorageService`.