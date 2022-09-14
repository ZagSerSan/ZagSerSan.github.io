$(function() {

let burger = $('#burger');
let nav = $('#header-nav');
let header = $("#header");
let introH = $('#intro').innerHeight()-50;;
let scrollPos = $(window).scrollTop();

// call menu by ckick burger button
burger.on('click', function(even) {
   even.preventDefault();
   nav.toggleClass('active');
});

// fixed header
$(window).on('scroll load resize', function() {
   introH = $('#intro').innerHeight()-50;
   scrollPos = $(window).scrollTop();
   nav.removeClass('active');
   if (scrollPos > introH) {
      header.addClass('fixed');
   } else {
      header.removeClass('fixed');
   }
});

// скролл до блока


});