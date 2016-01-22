Now you have a `build` directory that contains your built application in a
single file `app.js`. However, you also need to move your `src/index.html` in your
build, and also `bower_components` directory.

Make sure that you change `<script src="...">` paths in your `index.html` accordingly.

Create a `copy` task for that. You can use `grunt-contrib-copy` for that:

https://github.com/gruntjs/grunt-contrib-copy

Once you have a copy task it is good to have a `clean` task that will just remove
the `build` directory. Add `clean` task.

Once you have `concat`, `clean` and `copy` in place combine them in one
`default` task like this:

     grunt.registerTask('default', ['clean', 'concat', 'copy']);

You can now run it without specifying task name (it's the same as *all* make target
in Makefile).

     ./node_modules/.bin/grunt

The last thing to do is to change 'root' setting of http-server, so it serves from the
build directory.
