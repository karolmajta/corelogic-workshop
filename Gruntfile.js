var grunt = require('grunt');

grunt.initConfig({
    'http-server': {
         root: '.',
         port: 8282,
         host: "127.0.0.0",
         showDir : true,
         autoIndex: true,
         ext: "html",
         runInBackground: false
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
        deps: {
             src: 'bower_components/**/*',
             dest: 'build/'
        }
    },
    clean: ["build"]
});

grunt.loadNpmTasks('grunt-http-server');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');

grunt.registerTask('default', ['clean', 'concat', 'copy']);
