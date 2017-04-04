'use strict';
$(function(){
/*   _______________________________________________ */


/*   _______________________________________________ */

  let apiKey = '&APPID=29c36cf2524b2fe81f752daf790a2dd8',
   baseWeatherRequest = 'http://api.openweathermap.org/data/2.5/weather?',
   success = false,
   userData  = getIpInfos(),
    parametri =  'lat=' + userData.lat + '&lon=' + userData.lon,
    degMes = 'imperial',
    weatherData = getWeatherData();
    console.log(weatherData);


 
  /*=====================    FUNCTIONS     =====================*/    

function getIpInfos(){
  let valid ;
   let request = $.getJSON({
              async: false,
              method: "GET",
              url: 'http://ip-api.com/json',
              dataType: "json"
   });
       request.done(function(response){
             success = true;
             return  valid = response;
       });

       request.fail(function(jqXHR, error){
         success = false;
         return valid = alert("We got an Error please Try Later: " + error);
       });
   
   return valid;
}

console.log(userData);


function getWeatherData(){
   let finalValid, request;
    request = $.ajax({
      async: false,
      url: baseWeatherRequest + parametri + apiKey,
      dataType: "json",
      method: "GET"
    });

     request.done(function(valid){
       finalValid = valid;
     });

     request.fail(function(error){
       finalValid =  alert("We got an error please try later " + error);
     });

  return finalValid;  
} 




/* Function for the date */
(function(){
let dateNow = new Date(),
    dateObj = {
                day : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                month: ['January','February','March','April','May','June','July','August','September','October','November','December']
    },
     day = dateObj.day[dateNow.getDay()],
     month =dateObj.month[dateNow.getMonth()] ;
     


$('#date').html(day +" " + month + " " + dateNow.getFullYear());
$('#location').html(userData.city + ", " + userData.country);
$('#latAndLong').html("Lat: " + userData.lat.toFixed(2) + ", " + "Lon: " + userData.lon.toFixed(2));
$('#temp').html(Math.round(weatherData.main.temp) + "&deg; F" );
$('#humidity').html(weatherData.main.humidity);
$('#humidity').html(weatherData.main.humidity + " %");
$('#pressure').html(weatherData.main.pressure + " hPa");
$('#wind').html(weatherData.wind.speed + " km/h");
$('#conditionIcon').removeClass('wi-na').addClass('wi-owm-' + weatherData.weather[0].id);

  function toUp(el){  /*function to do first letter upperCase */
     var firstStep = el.charAt(0).toUpperCase();
     var secondStep = el.slice(1);
    return firstStep.concat(secondStep);


  }

let condition = toUp(weatherData.weather[0].description + " !");
     


$('#condition').html(condition);



/*end of efi */
})();





/* end of jquery doc ready */
});



