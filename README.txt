Now we have pretty much automated our build, but we still cannot
do different builds for production, staging, development etc.

We want to be able to configure two things:

The API address displayed in link. The company name.

We want to be able to pass these values during build time like this:

./node_modules/.bin/grunt --url=<http://corelogic.pl> --company-name=<Corelogic>

We can use `grunt.option` API for this:

http://gruntjs.com/api/grunt.option

Web apps are not exactly like binary executables. Once they're built
you cannot configure them from command line, etc. This is why we have
to "render" the configuration into a js file, that will become part of
the final build.

We can use `grunt-ejs-render` for this. Try configuring this task yourself
so it renders a `build/js/config.js` file that looks like this:

angular.module('corelogic.config', [])
  .constant('URL', 'http://corelogic.pl')
  .constant('COMPANY_NAME', 'Corelogic');

You can use an `ejs` template located in `src/config.ejs` that looks like this:

angular.module('corelogic.config', [])
  .constant('URL', '<%= url %>')
  .constant('COMPANY_NAME', '<%= companyName %>');

Make sure to use these constants in other modules. Also, because we render straight
to `build/js/config.js` make sure to add a script tag in index.html.

Make the render task part of your 'default' task.
