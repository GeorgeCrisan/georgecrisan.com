'use strict';

jQuery(function(){
  let channels = ["ESL_SC2", "OgamingSC2",  "freecodecamp", "comster404", "brunofin"];   
//'https://api.twitch.tv/kraken/streams/freecodecamp?callback=?'
let baseUrlUsers = 'https://api.twitch.tv/kraken/users/';
let baseUrlStreams = 'https://api.twitch.tv/kraken/streams/';
let baseUrlCh = 'https://api.twitch.tv/kraken/channels/';


 function getInfo(url){
   let clientId = 'eizrgwfi24ug1ehiyngksi6a5o5s0b';
   let statusC ;
   return new Promise(function(resolve,reject){
     let xhr = new XMLHttpRequest();
     
     xhr.onload = function(){
       
       resolve(JSON.parse(xhr.responseText));
     };
     xhr.onerror = function(){
           reject(error);
     };

     xhr.open("GET",url,true);
     xhr.setRequestHeader("Client-ID",clientId);
     xhr.send();
     
   });
 }

channels.forEach(function(chanel){
    getInfo(baseUrlStreams + chanel).then(function(data1){

     let status,game;
     if(data1.stream == null){
        status = "offline";
        game = "Offline";  
     } else if (data1.stream === undefined){
       status = "offline";
       game = "offline";
      
     } else {
       game = data1.stream.game;
       status = "online";
      
     }

         getInfo(baseUrlUsers + chanel).then(function(data){

         let logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F" ,
            name = data.display_name != null ? data.display_name : chanel,
            dataMmessage = data.message != undefined ? data.message : "";
            

              
             getInfo(baseUrlCh + chanel).then(function(data3){
                 var  link = data3.url;
                console.log(data3);
                $(".article").append("<section><img src="+ logo + "></img><a href="+ link +"><h2>" + name  + "</h2></a><a href="+ link +"><p>"+ game + " " + dataMmessage + data3.status +"</p></a><span></span></section>");
             });

         });

            

  });
});





}); //end of jquery