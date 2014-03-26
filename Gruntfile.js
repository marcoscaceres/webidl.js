module.exports = function(grunt) {
  'use strict';
  var allFilesAndTests = ['lib/**/*.js', 'test/*-tests.js'];
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    requirejs: {
      compile: {
        options: {
          name: 'config',
          baseUrl: "lib/",
          mainConfigFile: "lib/config.js",
          out: "dist/webidl.js"
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: allFilesAndTests
    },

    qunit: {
      options: {
        timeout: 20000
      },
      all: {
        options: {
          urls: ['http://localhost:8000/test/index.html']
        }
      }
    },

    connect: {
      server: {
        port: 8000,
        base: '.'
      }
    },

    jsbeautifier: {
      files: allFilesAndTests
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('test', ['connect', 'qunit']);
  grunt.registerTask('tidy', ['jsbeautifier', 'jshint']);
  grunt.registerTask('default', ['jsbeautifier', 'jshint', 'requirejs', 'test']);

};
