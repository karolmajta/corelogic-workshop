Install [JSON server](https://github.com/typicode/json-server).

There is a db.json file in root directory of the project. Run it
with:

    ./node_modules/.bin/json-server --watch db.json

Download [Postman Chrome Plugin](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
and play for a while with the REST api of the server.

Refactor the `getTodos` method of `todoList` to use the `$http.get`
and fetch results from the server instead of using `$timeout`.

Refactor and use `todoListProvider` to configure the base url of the server
[http://localhost:3000](http://localhost:3000).
