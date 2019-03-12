
module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: ['rectangle.js','calc.js'],
        dest:'dist/bundle.js'
      },
      options: {
        separator:''
      }   
    }          
  });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);

};
