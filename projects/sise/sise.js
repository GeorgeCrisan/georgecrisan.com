jQuery(function() {
    "use strict";


    /**prevent double zoom and double click selecting in browser and mobile devices  */
    $('.wrapper').bind('touchstart', function preventZoom(e) {
        var t2 = e.timeStamp;
        var t1 = $(this).data('lastTouch') || t2;
        var dt = t2 - t1;
        var fingers = e.originalEvent.touches.length;
        $(this).data('lastTouch', t2);
        // ceva de vazut

        if (!dt || dt > 500 || fingers > 1) {
            return; // not double-tap
        }
        e.preventDefault(); // double tap - prevent the zoom
        // also synthesize click events we just swallowed up
        $(e.target).trigger('click');

    });
    /**finish of thew doble tap prevent function*/

    /**define Arry.prototype.equal method in the prototype of the array */
    if (Array.prototype.equals)
        console.warn("I will overdie any equal methods ");

    Array.prototype.equals = function(array) {
        if (!array)
            return false;

        if (this.length != array.length)
            return false;


        for (var i = 0, l = this.length; i < l; i++) {
            if (this[i] instanceof Array && array[i] instanceof Array) {
                if (!this[i].equals(array[i]))
                    return false;
            } else if (this[i] != array[i]) {
                return false;
            }

        }
        return true;
    };

    Object.defineProperty(Array.prototype, 'equals', { enumerable: false });
    /**end of compare method  */


    /*****bootstrap switch button settings size and colors *********/
    $.fn.bootstrapSwitch.defaults.size = 'mini';
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
    var wonG = false;
    var theChoice = undefined;
    var historyPlayer = [];
    var historyUi = [];
    var level = 1;
    var wrg = false;
    var randomness;




    function audioChoice(para) {
        if (para == 0)
            return 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';

        else if (para == 1)
            return 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';

        else if (para === 2)
            return 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';

        else if (para === 3)
            return 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';

        else if (para == "fail")
            return 'http://soundjax.com/reddo/79133%5Ebuzzer.mp3';


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






    function running() {


        function comPart() {
            $('#count').html(level);
            document.getElementById("red").style.pointerEvents = "none";
            document.getElementById("yellow").style.pointerEvents = "none";
            document.getElementById("blue").style.pointerEvents = "none";
            document.getElementById("green").style.pointerEvents = "none";

            var randomness = randomGen();
            historyUi.push(randomness);
            if (wrg === true) {
                wrg = false;
                historyUi.pop();
            }

            if (level === 21) {

                alert("You Won...!!! Yohoooo!!! ");

                $('#count').html("1 <p>count</p>");
                clearTimeout();
                historyUi = [];
                historyPlayer = [];
                level = 1;
                wonG = true;
                return;
            }

            if (historyUi.length > 0) {
                historyUi.forEach(function(element, index) {

                    document.getElementById("red").style.pointerEvents = "none";
                    document.getElementById("yellow").style.pointerEvents = "none";
                    document.getElementById("blue").style.pointerEvents = "none";
                    document.getElementById("green").style.pointerEvents = "none";

                    setTimeout(function() {
                        if (wonG === true) {
                            clearTimeout();
                            wonG = false;
                            historyUi = [];
                            historyPlayer = [];
                            return;

                        }


                        setTimeout(function() {
                            buttons[element].style.filter = "brightness(130%)";
                            playAudio(audioChoice(element));
                        }, 0);

                        setTimeout(function() {
                            buttons[element].style.filter = "brightness(100%)";
                            console.log(historyUi + ' *******this is history of the computer');

                            if (historyUi.length >= level) {

                                playerpart();
                            }
                        }, 300);


                    }, timeFreq(level) * (index + 1));

                });
            }
        } // end of comp part
        comPart();

        function playerpart() {
            //console.log(historyPlayer + "from playerpart at the begging");
            document.getElementById("red").style.pointerEvents = "auto";
            document.getElementById("yellow").style.pointerEvents = "auto";
            document.getElementById("blue").style.pointerEvents = "auto";
            document.getElementById("green").style.pointerEvents = "auto";

            function whichone(elmId) {

                if (elmId === 'green')
                    return 0;
                else if (elmId === 'red')
                    return 1;
                else if (elmId === 'yellow')
                    return 2;
                else if (elmId === 'blue')
                    return 3;
            } // end of which one

            $('.bt').unbind('mousedown');
            $('.bt').on('mousedown', function(e) {
                theChoice = whichone(e.target.id);
                e.stopPropagation();
                console.log(historyPlayer + " after click event dar vine simplu");
                historyPlayer.push(theChoice);
                playAudio(audioChoice(theChoice));
                if (historyPlayer.equals(historyUi)) {
                    historyPlayer = [];
                    $('#count').html(level);
                    level++;
                    setTimeout(comPart, 1100);
                }

                setTimeout(function() {

                    buttons[theChoice].style.filter = "brightness(130%)";
                    playAudio(audioChoice(theChoice));
                }, 0);

                setTimeout(function() {
                    buttons[theChoice].style.filter = "brightness(100%)";
                    if (historyUi.length === historyPlayer.length && historyUi.equals(historyPlayer)) {
                        historyPlayer = [];
                        $('#count').html(level);
                        level++;
                        setTimeout(comPart, 1100);
                    } else if (historyUi.length === historyPlayer.length && !historyPlayer.equals(historyUi)) {

                        playAudio(audioChoice('fail'));
                        //level = historyUi.length;
                        historyPlayer = [];
                        alert('wrong combination. Press start again!');
                        $('#count').html(level);
                        wrg = true;

                        if (strict == true) {
                            $('#count').html("1 <p> count </p>");
                            alert('Wrong sequence. Press start again !');
                            clearTimeout();
                            historyPlayer = [];
                            historyUi = [];
                            level = 1;
                        }
                    }

                }, 300);

            });

        } //end of player part


    }; // end of running





    function timeFreq(level) {
        var tFreq = [800, 600, 550];

        if (level < 8)
            return tFreq[0];
        if (level < 14)
            return tFreq[1];
        if (level < 20)
            return tFreq[2];

    }; //end of timeFreq


    switcho.on('switchChange.bootstrapSwitch', function() {


        if (switcho.bootstrapSwitch("state") === true) {
            //end of startClk
            startBt.unbind('click');
            startBt.on('click', running);
            $('#count').css('background-color', '#6C3483');



        } else if (switcho.bootstrapSwitch("state") === false) {

            startBt.on('click', function() { return; });

            historyUi = [];
            historyPlayer = [];
            $('#count').css('background-color', '#fff');
            $('#count').html(" - <p> count </p>");
            level = 1;

        }
        console.log(switcho.bootstrapSwitch("state"));
    });

    strictBt.on('click', function() {
        strictBulb.toggleClass('diferit');
        if (strictBulb.hasClass('diferit'))
            strict = true;
        else
            strict = false;
        console.log(strict);
    });

}); //end of jQuery