$(document).ready(function(){
      var $moveable = $('.moveAble');
      $(document).mousemove(function(e){
          var X = e.pageX;
          var Y = e.pageY;
          var top = $('.moveAble').css("top");
          var left = $('.moveAble').css("top");
          var body = $('body');
          var width = body.innerWidth();
          var widhtDevided = width / 2;
          if (X > widhtDevided) {
              alert('STOP');
          }
          $moveable.css({'top': Y,'left': X});
         // console.log(widhtDevided);
      });
    });