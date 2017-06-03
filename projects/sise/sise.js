jQuery(function(){
    "use strict";
    $.fn.bootstrapSwitch.defaults.size = 'mini';
$.fn.bootstrapSwitch.defaults.onColor = 'success';
$.fn.bootstrapSwitch.defaults.offColor = 'danger';
  //function for change
$.fn.bootstrapSwitch.defaults.onSwitchChange = function(event, state) {}
$("[name='my-checkbox']").bootstrapSwitch("state",false);

  
  //cache the dom
  
  var buttons = document.getElementById("fiGt").children;
  console.log(buttons);
  var countSe = $(".count");
  var startBt = $(".start");
  var strictBt = $(".strict");
  var strictBulb = $(".strict-bulb");
  var switcho = $("[name='my-checkbox']");
  var count = 0;
  var historyUi = [];
  var historyPlayer = [];
  var strict = false;
  var wrongColorChoice = 0;
  var level = 1;
  var compChoices = [];
  

        function audioColors(){
                  var green  = 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
                  var  red = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
                  var  blue = 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';
                  var  yellow = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';
                  var  fail = 'http://k003.kiwi6.com/hotlink/clrtgq79wz/failsimon.mp3' ;                  
                   }; //end of 

  function randomGen(){
          if(level === 1)
            compChoices = [];

       var randNum = Math.floor(Math.random() * 4) +1;
       compChoices.push(randNum);     
   }; //end of randomGen
        

   /*    function addOpacityAndS(e){
            var colorOfElement =typeof e=="string"?e:e.target.id;
            var soundByColor;

            if(this.wrongColorChoice === 0)
              soundByColor = colorOfElement;
            else 
              soundByColor = "fail";  

          var playSound  = this.audioColors[soundByColor];
          this.playAudio(playSound);

         setTimeout(function(){
           document.getElementById(colorOfElement).style.filter = "brightness(120%)";
          },0);  

         setTimeout(function(){
           document.getElementById(colorOfElement).style.filter = "brightness(100%)";
          },500);  

        } //end of addOpacityAndS */


   function playAudio (part){
       var audio = new Audio(part);
       audio.play();

   }; // end of play Audio

 



var interval;

  function compPlay(){

      clearInterval(interval);
       randomGen();

      document.getElementById("red").style.pointerEvents = "none";
      document.getElementById("yellow").style.pointerEvents = "none";
      document.getElementById("blue").style.pointerEvents = "none";
      document.getElementById("green").style.pointerEvents = "none";


    var i = 0;
      
      interval = setInterval(function(){

           i++;

         if(i === compChoices.length){
             document.getElementById("yellow").style.pointerEvents = "auto";
             document.getElementById("yellow").style.pointerEvents = "auto";
             document.getElementById("yellow").style.pointerEvents = "auto";
             document.getElementById("yellow").style.pointerEvents = "auto";
         }  

      },this.timeFreq(this.level)); // end of interval
      

  }; // end of compPlay



  function timeFreq(level){
       var tFreq = [1350,1000,770,500];

       if(level < 4)
         return tFreq[0];
       if(level < 8 )
         return tFreq[1];
       if(level < 12)
         return tFreq[2];
       if(level <= 20)      
        return tFreq[3];
  };  //end of timeFreq





switcho.on('switchChange.bootstrapSwitch', function () {


    if(switcho.bootstrapSwitch("state") === true){
          //end of startClk

    }

 else if(switcho.bootstrapSwitch("state") === false){
 
  }
    
   console.log(switcho.bootstrapSwitch("state"));
});





    
}); //end of jQuery