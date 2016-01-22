You see that we have

    <div ng-controller="pageController">
      The toast is:
      <h1>{{toast}}</h1>
    </div>

In our `index.html`. We would rather use angular feature called templates.
I've prepared such template for you - it's in `src/tempaltes/page.html`
directory, and contains the markup from above.

In your `index.html` replace this div with:

<ng-include src="'templates/page.html'"><ng-include>

What should happen? What happens?

Chrome will not allow you to do an AJAX request for a template using
`file://` protocol. This is because of browser's security policy.

To mitigate this, we need a local development webserver.

The project root contains a minimal `Gruntfile.js`. You can think of
it as a Makefile for grunt. It contains a stub `http-server` task. Try invoking
it:

    $ ./node_modules/.bin/grunt http-server
    I should run the web server!!!

We will use the `grunt-http-server` package to run the real development
server.

https://www.npmjs.com/package/grunt-http-server

Basing on the documentation you should be able to install it (remember to
use the `--save` flag, this package is your development dependency!),
and modify the Gruntfile, so that the `http-server` task runs real server.
