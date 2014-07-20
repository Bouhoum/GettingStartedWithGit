$(document).ready(function(){
      var $moveable = $('.moveAble');
      $(document).mousemove(function(e){
          var moveAble = $('.moveAble');
          var X = e.pageX;
          var Y = e.pageY;
          var top = $('.moveAble').css("top");
          var left = $('.moveAble').css("left");
          var body = $('.body');
          var width = body.innerWidth();
          var height = body.innerHeight();
          var position = moveAble.position();
          var fix = height;
         // var widhtDevided = width / 2;
          if (Y == height) {
             $moveable.css({'top' : fix,'left': X});
          }else if (Y <= height) {
              if ( Y > 73.890625 || X > 173.1875){
              var Yresults = ((73.890625 * 2.5) - Y) + 60;
              var Xresults = ((173.1875 * 2.5) - X) + 160;
              $moveable.css({
              'top' : Yresults,
              'left': Xresults,
              }); }
          }else if (Y <= height)  {
              if (Y < 73.890625 || X < 173.1875) {
              var Yresults = ((73.890625 / 2.5) - Y) - 60;
              var Xresults = ((173.1875 / 2.5) - X) - 160;
              $moveable.css({
              'top' : Yresults,
              'left': Xresults,
              });
              }
          }
          
          console.log(Xresults);
      });
    });