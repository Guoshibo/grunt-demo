
module.exports = function (grunt) {
  grunt.initConfig({
    cssmin: {
      release:{
        files:{
                'dist/rectangle.css':['./rectangle.css']
                
        }
                        
      }                
                    
    } 
              
  });

      grunt.loadNpmTasks('grunt-contrib-cssmin');

            grunt.registerTask('default', ['cssmin']); 


};

