'use strict';

jQuery(function () {


  function getValueKey() {
    var input = $(".history").html();
    let operators = ["+", "-", "/", "*", "."],
      value = $(this).attr("key-val"),
      lateValue = input.charAt(input.length - 1);
       // if value is in operators and value is already at the end of the .history input
    if (operators.indexOf(value) !== -1 && value === lateValue)
      return;  // do not repeat it just return 

     if(operators.indexOf(value) !== -1 && value !== ".")
    $(".history").text(input + " " +  value + " " );
     else if (operators.indexOf(value) !== -1 && value == ".")
       $(".history").text(input + value );
    else 
       $(".history").text(input + value );

     if(input.length >= 18 ){
       $(".display").css({"color" : "#faa500", "font-size":" 14px"}).html("Limit Exceeded");
       console.log(input);
      setTimeout(function () {
        $(".display").css({"color" : "#fff", "font-size":" 22px"}).html("0");
        $(".history").html("");
      }, 1500);
     }

    // console.log(input);
  } // getValuekey

  function acAndBack() {
    let val = $(this).attr("key-val"),
      input = $(".history").html();

    if (val === "ac") {
      $(".history").html("");
      $(".display").html("0");
    } else if (val === "back")
      $(".history").html(input.slice(0, input.length - 1));
  } // end of clear and back button

  function equalAndCalc() {
    let content = $(".history").html(),
      result = "";


    try {
      result = eval(content).toFixed(2);
     // console.log(result);
      $(".display").html(result);

    } catch (e) {
      $(".display").css({"color" : "#faa500", "font-size":" 14px"}).html("Error");
      setTimeout(function () {
        $(".display").css({"color" : "#fff", "font-size":" 22px"}).html("0");
        $(".history").html("");
      }, 1500);
    } //end of try/catch
  } //end of equalAndCalc


  function sfSwitch() {
    let input = $(".history").text(),
      content = $(".history").html();

    if (input.match(/^\-/)) {

      content = input.slice(1, input.length);

      $(".history").html(content);

    } else if (!content.match(/^\-/)) {
      content = ("-" + content);
      $(".history").html(content);

    }


  } //end of sfSwitch
    
   
  //
  $(".nr").click(function (event) {
    event = event.target;
    getValueKey.call(event);
  });

  $(".sfc").click(function (event) {
    event = event.target;
    acAndBack.call(event);
  });

  $(".sfe").click(function (event) {
    event = event.target;
    equalAndCalc.call(event);
  });

  $(".sfswitch").click(function (event) {
    event = event.target;
    sfSwitch.call(event);
  });

     


  console.log("all ok");
}); // end of Jquery