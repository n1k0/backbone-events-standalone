module.exports = function(grunt) {
  var webpack = require('webpack');
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webpack: {
      backboneEvents: {
        entry: "./backbone-events-standalone.js",
        output: {
          path: ".",
          filename: "backbone-events-standalone.min.js",
          libraryTarget: "umd",
          library: "BackboneEvents"
        },

        stats: false,

        failOnError: true,
        plugins: [
          new webpack.optimize.UglifyJsPlugin({ })
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['webpack']);
};
