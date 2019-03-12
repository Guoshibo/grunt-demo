$(function(){
  var $width = $('#width'),
      $height = $('#length'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $btncal = $('#calculate');

      $btncal.click(function(){
        var w = Number($width.val()),
            h = Number($height.val());

        var rect = rectangle();  

        var p =(w+h)*2;
        var a = w*h;
        $perimeter.val(rect.perimeter(w,h));
        $area.val(rect.area(w,h));
      });
})
function rectangle(){
  return {
    'perimeter':function(width,height){
            return 2*(Number(width) + Number(height));
                
    },
    'area':function(width,height){
            return Number(width)*Number(height);
                
    }
      
  };

}
