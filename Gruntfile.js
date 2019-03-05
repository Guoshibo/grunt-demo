module.exports = function (grunt) {
  grunt.initConfig({
    less: {
      development:{
        files: { 'css/layout.css':'less/layout.less' }
                                                          
      } 
          
    }
      
  });

    grunt.loadNpmTasks('grunt-contrib-less');//加载这个插件
    grunt.registerTask('default', ['less']);

};
