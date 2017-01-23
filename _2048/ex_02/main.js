$($.fn.extend({
     mygame: function(size){
          var gameObject = $(this).attr("id");
          var blockSize = size /0.25;
          var boardSize = size;

          $(this).append("<div id ='board'></div>");

          $("#board").height(size);
          $("#board").css("width", size);
     }

}))
