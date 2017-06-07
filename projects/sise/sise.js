jQuery(function() {
    "use strict";
    $.fn.bootstrapSwitch.defaults.size = 'small';
    $.fn.bootstrapSwitch.defaults.onColor = 'success';
    $.fn.bootstrapSwitch.defaults.offColor = 'danger';
    //function for change
    $.fn.bootstrapSwitch.defaults.onSwitchChange = function(event, state) {}
    $("[name='my-checkbox']").bootstrapSwitch("state", false);


    //cache the dom

    var buttons = document.getElementById("fiGt").children;
    console.log(buttons);
    var countSe = $(".count");
    var startBt = $(".start");
    var strictBt = $(".strict");
    var strictBulb = $(".strict-bulb");
    var switcho = $("[name='my-checkbox']");
    var comfinished = false;
    var strict = false;
    var count = 0;
    var mark = 0;
    var historyPlayer = [];
    var historyUi = [];
    var wrongColorChoice = 0;
    var level = 5;
    var intervalUi;
    var randomness;
    var intervalIterator = 0;



    function audioChoice(para) {
        if (para == "green")
            return 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';

        else if (para == "red")
            return 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';

        else if (para === "blue")
            return 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';

        else if (para === "yello")
            return 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';

        else if (para == "fail")
            return 'http://k003.kiwi6.com/hotlink/clrtgq79wz/failsimon.mp3';


    }; //end of audi colors
    // to declare a bridge var to get the value from audioChoice and insert in playAudio to run
    function playAudio(part) {
        var audio = new Audio(part);
        audio.play();

    };

    function randomGen() {

        var randNum = Math.floor(Math.random() * 4);
        return randNum;
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


    // end of play Audio







    function running() {


        function comPart() {

            intervalIterator = setInterval(function() {
                console.log('coming from iterator!');

                if (historyUi.length >= level) {
                    clearInterval(intervalIterator);
                    document.getElementById("red").style.pointerEvents = "auto";
                    document.getElementById("yellow").style.pointerEvents = "auto";
                    document.getElementById("blue").style.pointerEvents = "auto";
                    document.getElementById("green").style.pointerEvents = "auto";
                    return playerpart();
                }


                document.getElementById("red").style.pointerEvents = "none";
                document.getElementById("yellow").style.pointerEvents = "none";
                document.getElementById("blue").style.pointerEvents = "none";
                document.getElementById("green").style.pointerEvents = "none";

                var randomness = randomGen();
                historyUi.push(randomness);


                setTimeout(function() {

                    buttons[randomness].style.filter = "brightness(130%)";
                }, 0);

                setTimeout(function() {
                    buttons[randomness].style.filter = "brightness(100%)";
                }, 300);

                console.log('ended');
            }, timeFreq(level));


        } // end of comp part




        comPart();

        function playerpart() {
            $('.bt').on('click', function(e) {
                console.log(e);
            });
        }

    }; // end of running





    function timeFreq(level) {
        var tFreq = [1900, 1700, 1500, 1300];

        if (level < 4)
            return tFreq[0];
        if (level < 8)
            return tFreq[1];
        if (level < 12)
            return tFreq[2];
        if (level <= 20)
            return tFreq[3];
    }; //end of timeFreq





    switcho.on('switchChange.bootstrapSwitch', function() {


        if (switcho.bootstrapSwitch("state") === true) {
            //end of startClk
            startBt.on('click', running);

        } else if (switcho.bootstrapSwitch("state") === false) {

        }

        console.log(switcho.bootstrapSwitch("state"));
    });






}); //end of jQuery