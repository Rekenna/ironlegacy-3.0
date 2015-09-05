$("header").removeClass("fixed");

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width > 600){
$(window).on("scroll", function(){
    var scroll = $(window).scrollTop();
    if (scroll > 250){
        $("header").addClass("fixed");
        $("main").addClass("header-fixed");
    }
    else{
        $("header").removeClass("fixed");
        $("main").removeClass("header-fixed");
    }
});

/* particlesJS('dom-id', params);
/* @dom-id : set the html tag id [string, optional, default value : particles-js]
/* @params: set the params [object, optional, default values : check particles.js] */

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: .5,
    size: 2,
    size_random: true,
    nb: 120,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: .8,
      width: 1,
      condensed_mode: {
        enable: true,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false,
    mouse: {
      distance: 200
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: false,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});
}