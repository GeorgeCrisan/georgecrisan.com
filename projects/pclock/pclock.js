$(function() {
    "use strict";
    //declare standard parameters
    var decrement,
        timerTime = 25,
        breakTime = 5,
        timerTimeSeconds = timerTime * 60,
        breakTimeSeconds = breakTime * 60;

    // cache the dom
    var display = $('.time-elapsing'),
        status = $('#status'),
        start = $('#start'),
        stop = $('#stop'),
        reset = $('#reset'),
        startBreak = $('#start-break'),
        stopBreak = $('#stop-break'),
        resetBreak = $('#reset-break'),
        setBreakMinus = $('.set-break-minus'),
        setBreakPlus = $('.set-break-plus'),
        setTimerMinus = $('.set-timer-minus'),
        setTimerPlus = $('.set-timer-plus'),
        setTimer = $('.set-timer-minutes'),
        setBreak = $('.set-break-minutes');

    display.html(timerTime + ':00');
    setBreak.html(breakTime);
    setTimer.html(timerTime);

    function arangeDisplay(secs) { //function helper to count down
        var minute = parseInt(secs / 60);
        var leftToMod = secs % 60;
        if (leftToMod < 10)
            leftToMod = "0" + leftToMod;
        display.html(minute + ":" + leftToMod);
    } //end of arrangeDisplay





    function elapseTime() {
        status.html("Session").css('color', 'lime');
        $('.main-wrapper').css("border", "solid 5px lime");
        start.attr('data', 'sesiune');
        stop.attr('data', 'sesiune');
        clearInterval(decrement);
        timerTimeSeconds--;
        decrement = setInterval(function() {
            arangeDisplay(timerTimeSeconds);


            if (timerTimeSeconds == 0) {
                clearInterval(decrement);
                breakTimeSeconds = breakTime * 60;
                elapseBrake();
            }
            timerTimeSeconds--;


        }, 1000);

    }


    function elapseBrake() {
        status.html("Break").css('color', 'orange');
        $('.main-wrapper').css("border", "solid 5px orange");
        start.attr('data', 'break');
        stop.attr('data', 'break');
        breakTimeSeconds--;
        clearInterval(decrement);
        decrement = setInterval(function() {
            arangeDisplay(breakTimeSeconds);

            if (breakTimeSeconds == 0) {
                clearInterval(decrement);
                timerTimeSeconds = timerTime * 60;
                elapseTime();
            }
            breakTimeSeconds--;
        }, 1000);
    }



    function addMins(element, second) {
        if (second === timerTimeSeconds && element == timerTime) {

            timerTime++;
            if (timerTime === breakTime)
                breakTime--;
            // console.log(timerTimeSeconds);
            timerTimeSeconds = timerTime * 60;
            // console.log(timerTimeSeconds);

            setTimer.html(timerTime);
        } else if (second === breakTimeSeconds && element == breakTime) {

            breakTime++;
            if (breakTime === timerTime)
                timerTime--;
            breakTimeSeconds = breakTime * 60;

            setBreak.html(breakTime);;

        }
    } // end of addMins

    function substractMins(element, second) {

        if (element == timerTime && second == timerTimeSeconds) {
            --timerTime;
            if (timerTime == breakTime)
                breakTime++;
            if (timerTime < 0)
                timerTime = 0;
            timerTimeSeconds = timerTime * 60;
            setTimer.html(timerTime);

        } else if (element == breakTime && second == breakTimeSeconds) {
            --breakTime;
            if (timerTime == breakTime)
                timerTime++;
            if (breakTime < 0)
                breakTime = 0;
            breakTimeSeconds = breakTime * 60;

            setBreak.html(breakTime);
        }

    } // end of subMins



    //declare eventListeners !!!!!!!!!!1
    setTimerPlus.on('click', function() {
        addMins(timerTime, timerTimeSeconds);
    }); // bind click event to add minutes to sesion 

    setBreakPlus.on('click', function() {
        addMins(breakTime, breakTimeSeconds);
        //console.log("odata"); 
    }); //bind click event to add minutes to break

    setTimerMinus.on("click", function() {
        substractMins(timerTime, timerTimeSeconds);
    });

    setBreakMinus.click(function() {
        substractMins(breakTime, breakTimeSeconds);
    });

    start.click(function() {

        if (start.attr('data') == 'break') {
            clearInterval(decrement);
            elapseBrake();
        }


        if (start.attr('data') == 'sesiune') {
            clearInterval(decrement);
            elapseTime();

        }

    });

    stop.click(function() {
        clearInterval(decrement);


    });

    //prevent from dbclock or mosedoun selection 
    $(".main-wrapper").mousedown(function(e) { e.preventDefault(); });
    console.log("ready to run");




});