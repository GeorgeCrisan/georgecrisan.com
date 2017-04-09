'use strict';


jQuery(function(){ //start jquery ready


  function runIn(){
   $(".resultContainer").empty();
 var wikiUrl = "https://en.wikipedia.org//w/api.php?action=opensearch&origin=*&format=json&limit=5&search=";
 var searchS = encodeURIComponent($('input').val().trim());
    
   function wikiData(url){
     return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            resolve(JSON.parse(xhr.responseText));
         
        };
        xhr.onerror = reject;
        xhr.open("GET",url);
       // xhr.responseType = 'json';
        xhr.send();

     });
   }
   
  //ajax call 
   wikiData(wikiUrl + searchS).then(function(result){
     console.log( result.length);
      console.log( result);
      if(!result[1][0])
        $('.resultContainer').append('<div class="containerForArticle"><h2> '+ 'Nothing Found Try to search with a different description !' + '</h2></div>');

   for(var i = 0; i < result[1].length; i++){
     var titlu = result[1][i];
     var description = result[2][i];
     var link = result[3][i];
    $('.resultContainer').append('<a class="removeDec" href="'+ link +'"><div class="containerForArticle"><h2> '+ titlu + '</h2><p>'+ description +'</p><a class="theA" href="'+ link +'">'+ link +'</a></div></a>');    

   }
    
 


   }).catch(function(error){
     console.log(error);
   });



 }
 
 
 $('#button').on('click',runIn);
$('#search').on('keypress',function(event){
    if(event.keyCode === 13 )
     return runIn();
});


   });//end of jquery statement