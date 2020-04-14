"use strict";

$(function () {

  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('.navbar-dark .navbar-toggler').on('click', function () {
    if ($('.tipic-menu').html() === 'Close') {
      $('.tipic-menu').html('Menu');
      $('.tipic-menu').toggleClass('change-color');
    } else {
      $('.tipic-menu').toggleClass('change-color');
      $('.tipic-menu').html('Close');
    }
  });

  function generateSwitch(swtich) {
    $(swtich).mouseover(function () {
      $(swtich).css({ 'opacity': '1' });
    });

    $(swtich).mouseout(function () {
      $(swtich).css({ 'opacity': '0' });
    });
  }

  for (var i = 0; i < 15; i++) {
    var roller = '.switch' + i;

    generateSwitch(roller);
  }

  $('.navbar-nav>a').on('click', function () {

    $('.navbar-collapse').collapse('hide');
    $('.tipic-menu').html('Menu');
    $('.tipic-menu').toggleClass('change-color');
  });

  function runPortofolio() {

    _.forEach($('.box1 a img'), function (element, key) {
      $(element).attr('src', 'assets/images/project' + key + '.jpg');
    });
  }

  function workwith() {
    var _$;

    var nodes = [];

    for (var _i = 0; _i < 10; _i++) {

      var node = document.createElement('img');
      node.src = 'assets/images/icons/ico' + _i + '.png';

      nodes.push(node);
    }

    (_$ = $('#work-with')).append.apply(_$, nodes);

    console.log(nodes[5].src, 'aici');
  }

  function navigationFunc() {
    $('.menu-button').click(function () {

      document.getElementById("mySidenav").style.width = "200px";

      setTimeout(function () {
        $('.sidenav a').css({ 'display': 'block' });
        $('.sidenav a').css({ 'opacity': '1' });
      }, 500);
    });

    $('.closebtn').click(function () {
      $('.sidenav a').css({ 'display': 'none' });
      $('.sidenav a').css({ 'opacity': '0' });
      document.getElementById("mySidenav").style.width = "0";
    });

    $('.sidenav a').click(function () {
      $('.sidenav a').css({ 'display': 'none' });
      document.getElementById("mySidenav").style.width = "0";
    });
  }

  runPortofolio();
  navigationFunc();
  workwith();

  particlesJS({
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  setTimeout(function () {
    return $('.order1 a').css({ visibility: 'visible' });
  }, 300);

  window.sr = ScrollReveal();
  sr.reveal('#portofolio', { duration: 300,
    delay: 300,
    viewFactor: 0.05 });

  sr.reveal('#work-with', { duration: 400,
    delay: 500,
    viewFactor: 0.1 });

  sr.reveal('.contact', { duration: 400,
    delay: 500,
    viewFactor: 0.1 });

  sr.reveal('.container-am', { duration: 400,
    delay: 500,
    viewFactor: 0.1 });

  sr.reveal('#portofolio-links', { duration: 100,
    delay: 1000,
    viewFactor: 0.1 });

  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
});