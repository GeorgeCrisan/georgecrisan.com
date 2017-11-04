'use strict';
jQuery(function () {

  function getIpInfo(url) { //get ip info
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(this.responseText);
      };
      xhr.onerror = reject;
      xhr.open('GET', url);
      xhr.send();

    }); // end of Promise
  } // end of get Ip Info

  getIpInfo('https://ipapi.co/json/').then(function (result) {


    let userData = JSON.parse(result) ,
      apiKey = '&APPID=29c36cf2524b2fe81f752daf790a2dd8',
      baseWeatherRequest = 'https://api.openweathermap.org/data/2.5/weather?',
      parametri = 'lat=' + userData.latitude + '&lon=' + userData.longitude;


    console.log(parametri);
    console.log(userData);

    function getWD(url) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(this.responseText);
        };
        xhr.onerror = reject;
        xhr.open("GET", url);
        xhr.send();
      });
    }

    getWD(baseWeatherRequest + parametri + apiKey).then(function (result) {
      var weatherData = JSON.parse(result);
      console.log(weatherData);
      //Here I have the weather data and I can do my madness
      $('#location').html(userData.city + ", " + userData.country);
      $('#latAndLong').html("Lat: " + userData.latitude.toFixed(2) + ", " + "Lon: " + userData.longitude.toFixed(2));
      $('#temp').html(Math.round(weatherData.main.temp - 273.15) + "&deg; C");
      $('#humidity').html(weatherData.main.humidity);
      $('#humidity').html(weatherData.main.humidity + " %");
      $('#pressure').html(weatherData.main.pressure + " hPa");
      $('#wind').html(weatherData.wind.speed + " km/h");
      $('#conditionIcon').removeClass('wi-na').addClass('wi-owm-' + weatherData.weather[0].id);
      var dataWID = weatherData.weather[0].id;

  var today = new Date();
  var h = today.getHours();
  console.log(h);



        if(dataWID >= 800 && dataWID <= 815)
          $(".bg").css('background-image','url("https://github.com/GeorgeCrisan/georgecrisan.com/blob/master/projects/weatherApp/img/csd800.jpg?raw=true")');
        if (dataWID >= 800 && dataWID <= 815 && h >= 19  ) 
          $(".bg").css('background-image','url("https://github.com/GeorgeCrisan/georgecrisan.com/blob/master/projects/weatherApp/img/csn800.jpg?raw=true")'); 
        if (dataWID >= 300 && dataWID <= 599)
          $(".bg").css('background-image','url("https://github.com/GeorgeCrisan/georgecrisan.com/blob/master/projects/weatherApp/img/rd500.jpg?raw=true")');  
        if (dataWID >= 300 && dataWID <= 599 && h > 19)
           $(".bg").css('background-image','url("https://github.com/GeorgeCrisan/georgecrisan.com/blob/master/projects/weatherApp/img/rn500.jpg?raw=true")'); 
        if (dataWID >= 600 && dataWID <= 699)
          $(".bg").css('background-image','url("https://github.com/GeorgeCrisan/georgecrisan.com/blob/master/projects/weatherApp/img/sd600.jpg?raw=true")');  
        if (dataWID >= 600 && dataWID <= 699 && h > 19)
           $(".bg").css('background-image','url("https://github.com/GeorgeCrisan/georgecrisan.com/blob/master/projects/weatherApp/img/sn600.jpg?raw=true")');    



      function toUp(el) { /*function to do first letter upperCase */
        var firstStep = el.charAt(0).toUpperCase();
        var secondStep = el.slice(1);

        return firstStep.concat(secondStep);
      }

      let condition = toUp(weatherData.weather[0].description + " !");
      $('#condition').html(condition);
   /* function for temperature */
      var unit = "metric";
      var temp = Math.round(weatherData.main.temp - 273.15);

$('#button').click(function(){
   if(unit === "imperial"){ 
   $('#button').html("Show in:<span> &deg; F </span>");
     unit = "metric";
     function toCelsius(f) {
       return Math.round((5/9) * (f-32));
    }
      temp = toCelsius(temp);
      $('#temp').html(temp +"&deg;&nbsp;&nbsp;C" ); 
     
     }
else  if(unit === "metric"){
    $('#button').html("Show in:<span> &deg; C </span>");
     
  function toFahrenheit(f){
      return Math.round(( f * (9/5)) + 32);
     }
     temp = toFahrenheit(temp);
     unit = "imperial";
  $('#temp').html(temp +"&deg;&nbsp;&nbsp;F" ); 
  }
    
  
  
});


    }).catch(function (error) {
      console.log(error + "Failed to get weatherData");
    });

  }).catch(function (error) {
    console.log(error + "Faild to get Ip info");
  });


  /* Function for the date */
  (function () {
    let dateNow = new Date(),
      dateObj = {
        day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      day = dateObj.day[dateNow.getDay()],
      month = dateObj.month[dateNow.getMonth()];



    $('#date').html(day + " " + month + " " + dateNow.getFullYear());

  })(); // end of iife






}); //end of jquery statement