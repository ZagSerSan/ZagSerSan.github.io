$(function() {

   let burger = $('#burger');
let nav = $('#header-nav');
let header = $("#header");
let introH = $('#intro').innerHeight()-50;;
let scrollPos = $(window).scrollTop();

checkScroll(scrollPos, introH);

// fixed header
$(window).on('scroll load resize', function(even) {
   even.preventDefault();
   introH = $('#intro').innerHeight()-50;
   scrollPos = $(window).scrollTop();
   checkScroll(scrollPos, introH);
   nav.removeClass('active');
});
function checkScroll(scrollPos, introH) {
   if (scrollPos > introH) {
      header.addClass('fixed');
   } else {
      header.removeClass('fixed');
   }
}

// call menu by ckick burger button
burger.on('click', function(even) {
   even.preventDefault();
   nav.toggleClass('active');
});

// smooth scroll by navigation links
$('[data-scroll]').on("click", function(even) {
   even.preventDefault();
   let elementId = $(this).data('scroll'); // get id elements in variable
   let elementOffset = $(elementId).offset().top;
   $('html, body').animate({
      scrollTop: elementOffset - 90
   }, 800);
});

// slider: https://kenwheeler.github.io/slick/
let slider = $("#reviewsSlider");

slider.slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   arrows: false,
   dots: true
 });













});
