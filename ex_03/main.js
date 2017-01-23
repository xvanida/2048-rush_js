$($.fn.extend({

     mindSize: 100,
     mymindmap: function(size){
          var mapObject = $(this).attr("id");

          var mindSize = 0.20 * size ;
          // console.log(mindSize);
          var mapSize = size;
          // console.log(mapSize);
          $(this).append("<div id ='board'></div>");
          $("#board").height(size);


          $("#board").append("<div id ='mind-master' children='0'></div>");
          $("#mind-master").height(0.5 *$.fn.mindSize);
          $("#mind-master").width(0.5 * $.fn.mindSize);



     },
     newmind: function(strToDisplay){
          var children = parseInt($(this).attr('children'))+1;
          var id = children -1;
          $(this).append("<div class='mind-container' children='0' id='_" +id +"'>"+ strToDisplay+"</div>");
          $(".mind-container").width(0.5 * $.fn.mindSize);
          $(".mind-container").height(0.5 * $.fn.mindSize);
          $(this).attr('children',children);

          $(this).children().each(function(index){
               var angle = 360 / children;
               var rot = angle * index;
               $(this).css("transform", "rotate("+ rot+"deg) translateY(-200px) rotate(-"+rot+"deg)");


          });
     //      jsPlumb.ready(function() {
     //        jsPlumb.connect({
     //            source:"mind-master",
     //            target:"_0",
     //            endpoint:"Rectangle"
     //        });
     //    });

          // jsPlumb.connect( { source:"div1", target:"div2", anchors:["BottomLeft", "TopLeft"] });

          // $(".mind-container").css("transform", "rotate(180deg)  translate(20px, 40px) rotate(-"+rot+"deg) ");



          // $(".mind-container").css("background", "red");
     }
}))
