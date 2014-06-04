/*jslint vars: true */
module.exports = function (grunt) {
  "use strict";
  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON("boilerplate.jquery.json"),

    // Banner definitions
    meta: {
      banner: "/*\n" +
      " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
      " *  <%= pkg.description %>\n" +
      " *  <%= pkg.homepage %>\n" +
      " *\n" +
      " *  Made by <%= pkg.author.name %>\n" +
      " *  Under <%= pkg.licenses[0].type %> License\n" +
      " */\n"
    },

    // Concat definitions
    concat: {
      dist: {
        src: ["src/jquery.boilerplate.js"],
        dest: "dist/jquery.boilerplate.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // Lint definitions
    jshint: {
      files: ["src/jquery.boilerplate.js"],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: ["dist/jquery.boilerplate.js"],
        dest: "dist/jquery.boilerplate.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    //Start server on localhost:9000 with livereload
    connect: {
      server: {
        options: {
          hostname: "localhost",
          port: 9000,
          base: "demo",
          livereload: true
        }
      },
      standalone : {
        options: {
          hostname: "localhost",
          port: 9000,
          base: "demo",
          livereload: true,
          keepalive: true
        }
      }
    },

    //Compiles less files for demo uses
    less: {
      dev: {
        options: {
          paths: ["demo/layout/less"]
        },
        files: {
          "demo/layout/main.css": "demo/layout/less/main.less"
        }
      }
    },

    //Compile less files and hint js files on change + livereload
    watch: {
      options: {
        livereload: true,
      },
      all: {
        files: ["demo/layout/less/**/*.less", "demo/*.html", "src/**/.*js"],
        tasks: ["jshint", "less"]
      }
    },

    //Automatically open Google Chrome
    open : {
      dev : {
        path: "http://127.0.0.1:9000/",
        app: "Google Chrome"
      }
    },

    // CoffeeScript compilation
    coffee: {
      compile: {
        files: {
          "dist/jquery.boilerplate.js": "src/jquery.boilerplate.coffee"
        }
      }
    },

    //Testing definitions
    karma: {
      unit: {
        configFile: "karma.conf.js",
        //singleRun: true,
        browsers: ["Chrome"]
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-open");
  grunt.loadNpmTasks("grunt-karma");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-coffee");

  grunt.registerTask("server", ["connect:standalone"]);
  grunt.registerTask("svwatch", ["connect:server","open:dev", "watch:all"]);
  grunt.registerTask("default", ["jshint", "concat", "uglify"]);
  grunt.registerTask("travis", ["jshint"]);

};
