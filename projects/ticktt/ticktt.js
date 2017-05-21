jQuery(function() {
  
  //cache the Dom and vars
  var  theContWel = $('.container-welcome');
  var  theContArea = $('.container-area');
  var choiceX = $('.uni1');
  var choiceO = $('.uni2');
  var theX  = $('.fa-times');
  var theO = $('.fa-circle-o');
  var playerSymbol = "";
  var computerSymbol = "";
  var boxes = $('.boxes span');
  var arrayOfBoxes = [];
  var markArray = [0,1,2,3,4,5,6,7,8];
  var winSitutations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ];
  var playerCombos = [];
  var computerCombos = [];
  var whoWon = "";


  $(".el0").click(function(){
      if(typeof markArray[0] == "number"){
           playerCombos.push(markArray[0]);
           markArray[0] = playerSymbol;
      $(".el0").html(playerSymbol);  
      console.log(playerCombos);
      checkForPlayer();
      computerTurn();

      }
  });

  $(".el1").click(function(){
      if(typeof markArray[1] == "number"){
          playerCombos.push(markArray[1]);
           markArray[1] = playerSymbol;
      $(".el1").html(playerSymbol);  
      console.log(playerCombos);
      checkForPlayer();
      computerTurn();

      }
  });

  $(".el2").click(function(){
      if(typeof markArray[2] == "number"){
          playerCombos.push(markArray[2]);
           markArray[2] = playerSymbol;
      $(".el2").html(playerSymbol);  
      console.log(playerCombos);
      checkForPlayer();
      computerTurn();

      }
  });


  $(".el3").click(function(){
      if(typeof markArray[3] == "number"){
          playerCombos.push(markArray[3]);
           markArray[3] = playerSymbol;
      $(".el3").html(playerSymbol);  
      console.log(playerCombos);
      checkForPlayer();
      computerTurn();

    }
    
  });
  
  
  $(".el4").click(function(){
      if(typeof markArray[4] == "number"){
           playerCombos.push(markArray[4]);
           markArray[4] = playerSymbol;
      $(".el4").html(playerSymbol);  
      console.log(playerCombos);
      checkForPlayer();
      computerTurn();
      }
  });

 $(".el5").click(function(){
      if(typeof markArray[5] == "number"){
          playerCombos.push(markArray[5]);
           markArray[5] = playerSymbol;
      $(".el5").html(playerSymbol); 
      console.log(playerCombos);
      checkForPlayer();
      computerTurn();

      }
  });

   $(".el6").click(function(){
      if(typeof markArray[6] == "number"){
          playerCombos.push(markArray[6]);
           markArray[6] = playerSymbol;
      $(".el6").html(playerSymbol);  
      console.log(playerCombos);
      checkForPlayer();
      computerTurn();

      }
  });

   $(".el7").click(function(){
      if(typeof markArray[7] == "number"){
          playerCombos.push(markArray[7]);
           markArray[7] = playerSymbol;
      $(".el7").html(playerSymbol);  
      console.log(playerCombos);
      checkForPlayer();
      computerTurn();
      
      }
  });


   $(".el8").click(function(){
      if(typeof markArray[8] == "number"){
          playerCombos.push(markArray[8]);
           markArray[8] = playerSymbol;
      $(".el8").html(playerSymbol);  
      console.log(playerCombos);
      computerTurn();
      checkForComputer();
      }
  });


  function compareArrays(arr1, arr2){
    return  arr1.every(function(v){
          return arr2.indexOf(v) > -1;
      });


  }

  function checkForPlayer(){
     console.log("checked for player");
       if(playerCombos.length > 2){
           winSitutations.map(function(element){
          console.log (compareArrays(element,playerCombos));
           });
       }


  }

 function checkForComputer(){
     //console.log("checked for Computer");
 } 



function computerTurn(){
    if(computerCombos.length > 3)
       return;
    setTimeout(function(){
        var random = Math.floor(Math.random() * 9);
    while(markArray[random] === "X" || markArray[random] == "O"){
        random = Math.floor(Math.random() * 9);
    }
    computerCombos.push(markArray[random]);
    markArray[random] = computerSymbol;   
    $('.el' + random).html(computerSymbol);
    
    console.log(computerCombos);
    checkForComputer();
    },800);
    
}






   //.container-welcome effects and functionality
  choiceX.mouseover(function(){
      choiceX.addClass("fa-spin");
      choiceX.removeClass("bounce");
  });

  choiceX.mouseout(function(){
      choiceX.removeClass("fa-spin");
      choiceX.addClass("bounce");
  });

  choiceO.mouseover(function(){
      choiceO.removeClass("bounce");
  });

  choiceO.mouseout(function(){
      choiceO.addClass("bounce");
  });


 choiceX.click(function(){
     playerSymbol = "X";
     computerSymbol = "O";
     theContWel.css("display","none");
     $('body').css("transition","all 2s ease");
     setTimeout(function(){ theContArea.css("display","block");
                            $('.boxes').css("display","block");},1000);
     $('body').css("background","#433159");
     $(".none").css("display","block");
     //console.log(playerSymbol + " player e x");
     //console.log(computerSymbol);
 });

 choiceO.click(function(){
     playerSymbol = "O";
     computerSymbol = "X";
     theContWel.css("display","none");
     $('body').css("transition","all 2s ease");
     setTimeout(function(){ theContArea.css("display","block");
                             $('.boxes').css("display","block");  },1000);
     $('body').css("background","#433159");
      $(".none").css("display","block");
      //console.log(playerSymbol + " player e o");
      //console.log(computerSymbol);
      
 });
 

  function drawboard(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext("2d");
    context.lineWidth = 3;
    context.strokeStyle = "yellow";
    //lines x axys 
    context.beginPath();
    context.moveTo(100, 5);
    context.lineTo(100, 148);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(200, 5);
    context.lineTo(200, 148);
    context.closePath();
    context.stroke();

    //lines y axys
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(5,48);
    context.lineTo(296,48);
    context.closePath();
    context.stroke();
    context.beginPath();
    context.moveTo(5,98);
    context.lineTo(296,98);
    context.closePath();
    context.stroke();

}


drawboard();



}); //end of jQuery


