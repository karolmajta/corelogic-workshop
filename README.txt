Now you will install your production dependencies (libraries
that will be used by your application, not by your build tools).

We will of course use angular and underscore.

We want to track our production dependencies in a special `bower.json`
file. This file is not there yet.

Create it with:

    $ ./node_modules/.bin/bower init

Now you can use `bower install` command to install dependencies.
Remember the `--save` flag that will persist installed dependency
in `bower.json` file.

After you're done try removing `bower_components` file and running

    $ ./node_modules/.bin/bower install

All dependencies should be fetched back, based on contents of your
`bower.json` file.
