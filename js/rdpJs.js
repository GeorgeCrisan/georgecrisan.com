
'use strict';

$('.navbar-toggle').click(function () {
  $('.navbar-toggle').toggleClass('customRotateClass');
});

$('#Footer p').append(new Date().getFullYear() + " georgerdp@gmail.com");


$(function () {
  var quotes = [{
    quote: "I was eating some pizza and I burnt the roof of my mouth. Then I thought, “wait a minute, this is the ceiling of my mouth.",
    author: "Demetri Martin",
    link: "http://www.georgecrisan.com"
  }, {
    quote: "I have certain rules I live by. My first rule: I don't believe anything the government tells me.",
    author: "George Carling",
    link: "http://www.georgecrisan.com"
  }, {
    quote: "Tradition and heritage are all dead people's baggage, stop carrying it. Move forward.",
    author: "Doug Stanhope",
    link: "http://www.georgecrisan.com"

  }, {
    quote: "On the theft of his material by Denis Leary: I have a scoop for you. I stole his act. I camouflaged it with punchlines, and to really throw people off, I did it before he did.",
    author: "Bill Hicks",
    link: "http://www.georgecrisan.com"
  }, {
    quote: "Problems are like toilet paper. You pull on one and ten more come.",
    author: "Woody Allen",
    link: "http://www.georgecrisan.com"

  }, {
    quote: "I love the rain - it washes memories off the sidewalk of life.",
    author: "Woody Allen",
    link: "http://www.georgecrisan.com"
  },
  {
    quote: "Dogs have no money. Isn't that amazing? They're broke their entire lives. But they get through. You know why dogs have no money? No pockets.",
    author: "Jerry Sinfield",
    link: "http://www.georgecrisan.com"
  }, {
    quote: "Property is theft. Nobody “owns” anything. When you die, it all stays here.",
    author: "George Carlin",
    link: "http://www.georgecrisan.com"
  }, {
    quote: "Automatic paper towel dispensers are a solution to something that was never a problem in the first place.",
    author: "Demetri Martin",
    link: "http://www.georgecrisan.com"
  }, {
    quote: "You know those Italian eraser phrases? \"That guy is a lowlife scummy little fat rat weasel bastard… I don't mean that in a bad way.\" Yeah, in the best possible way you can mean that.",
    author: "Dom Irrera",
    link: "http://www.georgecrisan.com"
  },
  {
    quote: "I have a lot of growing up to do. I realized that the other day inside my fort.",
    author: "ZACH GALIFIANAKIS",
    link: "http://www.georgecrisan.com"
  },
  {
    quote: "You know you're an alcoholic when the bartender knows your name... and you've never been to that bar before.",
    author: "ZACH GALIFIANAKIS",
    link: "http://www.georgecrisan.com"
  },
  {
    quote: "The reason people use a crucifix against vampires is that vampires are allergic to bull shit.",
    author: "Richard Pryor",
    link: "www.georgecrisan.com"
  }];

  /*global variables */
  var result = [],
     newQB = $('#newQuoteBtn'),
     containerQ = $('#quote'),
     tweetIt = $('#tweet-wrapper'),
    htmlBuildOut,
    vx = 0,
    localReuse = 0;


  function de() {
    var el = [];
    for (var k of quotes)
      el.push(k["link"]);
    return el;
  }


  /*this function creates the result array, which is a shuffle of random indexes from quotes object */
  (function () {
    var ql = quotes.length, randomnes;

    for (var i = ql.length - 1; ql > result.length; i--) {
      randomnes = Math.floor(Math.random() * ql);
      if (result.indexOf(randomnes) > -1) continue;
      result.push(randomnes);
    }

  })();

$("#tweet-wrapper").html('<a href="#" class="btn delayDisplay">Tweet Quote</a>');
  /*end of randomness!!!*/


  function buildOut() {
    // vx is a value to increment in order to iterate

    // num helps to iterate over suffled aray result
    // start of while loop
    if (vx < quotes.length) {

      var num = result[vx];

      if (quotes[num].link) {

        htmlBuildOut = '  <p>' + quotes[num].quote + '</p>' + '<footer><a href="' + quotes[num].link + '" target="_blank" class="parantezeDrepte author">' + quotes[num].author + '</a><span class="cursor">&#9646;</span></footer>  ';
        tweetIt.html('  <a href="https://twitter.com/intent/tweet?text=' + quotes[num].quote + ' - ' + quotes[num].author + '" class="btn" target="_blank">Tweet Quote</a>  ');  
    }
     

    } else {

      htmlBuildOut = '<div class="warning"><p> No more new quotes to display! <span class="cursor">&#9646;</span></p></div>  ';

    }

    vx++;

    return treptatRending();
  }


  var present, char, text;
  function treptatRending() {
  
    text = htmlBuildOut.slice(0, localReuse++);
    if (text === htmlBuildOut) return localReuse = 0;

    $("#quote").html(text);

    char = text.slice(-1);

    if (char === '<') present = true;
    if (char === '>') present = false;
    if (present) return treptatRending();

    return setTimeout(treptatRending, 20);

  };


  newQB.on('click', function () {
    buildOut();
  });

  /*end of jquerry call for quote machine */
});

