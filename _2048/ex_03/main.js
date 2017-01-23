$($.fn.extend({
     blockSize:500*0.2125,

     mygame: function(size){
          var gameObject = $(this).attr("id");
          var blockSize = size /0.25;
          var boardSize = size;

          $(this).append("<div id ='board'></div>");

          $("#board").height(size);
          $("#board").css("width", size);
     },
     insertblock: function(){
          var tile= false; //if tile created then tile will be equal to true
          for (var i=1; i<=16;i++){
          $("#board").append("<div class='square-container' tile='"+tile+"'  id='"+i+"' ></div>");};
          $(".square-container").height($.fn.blockSize);
          $(".square-container").css("width", $.fn.blockSize);
     }



}))
