var grunt = require('grunt');

grunt.initConfig({
    'http-server': {
        dev: {
         root: 'build',
         port: 8282,
         host: "localhost",
         showDir : true,
         autoIndex: true,
         ext: "html",
         runInBackground: true
        },
        prod: {
          root: 'build',
          port: 8282,
          host: "localhost",
          showDir : true,
          autoIndex: true,
          ext: "html",
          runInBackground: false
        }
    },
    concat: {
        options: {
            separator: ';',
        },
        dev: {
             src: ['src/js/**/*.js'],
             dest: 'build/js/app.js',
        }
    },
    copy: {
        index: {
             src: 'src/index.html',
             dest: 'build/index.html',
        },
        templates: {
             src: 'templates/**/*',
             dest: 'build/',
             cwd: 'src',
             expand: true
        },
        css: {
            src: 'css/**/*',
            dest: 'build/',
            cwd: 'src',
            expand: true
        },
        deps: {
             src: 'bower_components/**/*',
             dest: 'build/'
        }
    },
    render: {
        config: {
            options: {
                companyName: grunt.option('company-name'),
                purgeDone: grunt.option('purge-done') === true
            },
            files: {
                'build/js/config.js': ['src/config.ejs']
            }
        }
    },
    jshint: {
        all: ['Gruntfile.js', 'src/**/*.js']
    },
    watch: {
        scripts: {
            files: ['src/**/*.js', 'src/**/*.css', 'src/**/*.html'],
            tasks: ['default']
       },
       options: {
           livereload: true
       }
    },
    clean: ["build"]
});

grunt.loadNpmTasks('grunt-http-server');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-ejs-render');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['clean', 'jshint', 'concat', 'copy', 'render']);
grunt.registerTask('develop', ['default', 'http-server:dev', 'watch']);

