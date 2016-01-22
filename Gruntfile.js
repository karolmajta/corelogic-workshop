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
});

grunt.loadNpmTasks('grunt-http-server');
grunt.loadNpmTasks('grunt-contrib-concat');
