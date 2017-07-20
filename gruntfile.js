module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      task: {
        src: ['_roboczy/js/skrypty.js'], 
        dest: 'js/skrypty.min.js'
      },
      options: {
        'mangle': {},
        'compress': {},
        'beautify': false,
        'expression': false,
        'report': 'min',
        'sourceMap': false,
        'sourceMapName': undefined,
        'sourceMapIn': undefined,
        'sourceMapIncludeSources': false,
        'enclose': undefined,
        'wrap': undefined,
        'exportAll': false,
        'preserveComments': undefined,
        'banner': '',
        'footer': ''
      }
    },
    cssmin: {
      task: {
        src: ['_roboczy/css/style.css'], 
        dest: 'css/style.min.css'
      },
      options: {
        'banner': null,
        'keepSpecialComments': '*',
        'report': 'min'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify', 'cssmin']);
};