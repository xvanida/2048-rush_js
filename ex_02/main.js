$($.fn.extend({
     mymindmap: function(size){
          var mapObject = $(this).attr("id");
          // console.log(mapObject);
          var mindSize = 0.20 * size ;
          // console.log(mindSize);
          var mapSize = size;
          // console.log(mapSize);
          $(this).append("<div id ='board'></div>");
          $("#board").height(size);
          $("#board").css("background", "#F0EED1");
     }
}))
