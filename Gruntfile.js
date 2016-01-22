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
    }
});

grunt.loadNpmTasks('grunt-http-server');
