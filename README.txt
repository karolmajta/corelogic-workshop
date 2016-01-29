Write a simple controller that will store a list of todos on scope.
The todos should look like this:

```
[
    {text: "Learn Angular", done: false},
    {text: "Learn JS", done: true},
    {text: "Become a LISP master", done: false}
    ...
]
```

Change the page template, so that it includes a list of todos.
You can use [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat)
directive for this.

Change the template so it shows an input for a new todo.
Bind it with scope using [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel).

Under the input create a button that will append a new todo (not done by default)
to the list of todos. You can use [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick)
for this.

Make sure that done todos get displayed on gray background and not done todos get displayed
on green background. You can use [ng-class](https://docs.angularjs.org/api/ng/directive/ngClass).

