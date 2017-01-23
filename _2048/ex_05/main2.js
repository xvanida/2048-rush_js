$($.fn.extend({
     blockSize:500*0.2125,
     tableEmptyTile: new Array(),
     tableFullTile: new Array(),


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
          for (var i=0; i<16;i++){
               $("#board").append("<div class='square-container emptytile' id='"+i+"' ></div>");};
               $(".square-container").height($.fn.blockSize);
               $(".square-container").css("width", $.fn.blockSize);
          },
          inserttile: function(){
               var countEmptyCell = 15;
               var tile1 = Math.floor((Math.random() * countEmptyCell)+1);


               var tile2 = Math.floor((Math.random() * countEmptyCell)+1);
               while(tile1 == tile2)
               {
                    tile2 = Math.floor((Math.random() * countEmptyCell)+1);
               }//générer les deux id qui receveront le tile

               $("body").on("click",function(){
                    if($('.fulltile').length == 0){//générer les deux premiers

                         $(".square-container").each(function(index){
                              var id = parseInt($(this).attr("id"));

                              $.fn.tableEmptyTile.push(id);

                              if (tile1 == id)
                              {
                                   var value = Math.floor((Math.random() * 4)+1);
                                   while(value == 3 || value == 1)
                                   {
                                        var value = Math.floor((Math.random() * 4)+1);
                                   }

                                   $(this).append("<div class='tile'>"+value+"</div>");
                                   $(this).removeClass('emptytile');
                                   $(this).addClass('fulltile');
                                   var index = $.fn.tableEmptyTile.indexOf(id);
                                   $.fn.tableEmptyTile.splice(index, 1);
                                   $.fn.tableFullTile.push(id);

                              }
                              if (tile2 == id)
                              {
                                   var value = Math.floor((Math.random() * 4)+1);
                                   while(value == 3 || value == 1)
                                   {
                                        var value = Math.floor((Math.random() * 4)+1);
                                   }
                                   $(this).append("<div class='tile'>"+value+"</div>");
                                   $(this).removeClass('emptytile');
                                   $(this).addClass('fulltile');
                                   var index2 = $.fn.tableEmptyTile.indexOf(id);
                                   $.fn.tableEmptyTile.splice(index2, 1);//enleve des empty
                                   $.fn.tableFullTile.push(id);//ajoute au full
                              }



                         });

                    }

                    else{

                         // console.log($.fn.tableEmptyTile.length);
                         // console.log($.fn.tableFullTile.length);
                         var tile = $.fn.tableEmptyTile[Math.floor(Math.random()* $.fn.tableEmptyTile.length)];//détermine le tile empty à remplir

                         $(".square-container").each(function(){

                              var id = parseInt($(this).attr("id"));
                              if (tile == id)
                              {

                                   var value = Math.floor((Math.random() * 4)+1);
                                   while(value == 3 || value == 1)
                                   {
                                        var value = Math.floor((Math.random() * 4)+1);
                                   }

                                   $(this).append("<div class='tile'>"+value+"</div>");
                                   $(this).removeClass('emptytile');
                                   $(this).addClass('fulltile');
                                   var index = $.fn.tableEmptyTile.indexOf(id);
                                   $.fn.tableEmptyTile.splice(index, 1);
                                   $.fn.tableFullTile.push(id);
                              }});

                         }
                    });
               },
               movetile: function(){
                    $(document).on("keypress", function(event){
                         var board = $("#board");
                         board.inserttile();
                         alert(event);
                         switch (event.keyCode) {
                              case 37:
                              alert("gauche");
                              board.inserttile();
                              break;
                              case 38:
                              alert("haut");
                              board.inserttile();
                              break;
                              case 39:
                              alert("droite");
                              board.inserttile();
                              break;
                              case 40:
                              alert("bas");
                              board.inserttile();
                              break;

                         }
                    })
               }


          }))
