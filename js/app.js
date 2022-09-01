$(function() {
   
// fixed header
   let header = $("#header");
   let intro = $("#intro");
   let introHeight = intro.innerHeight()-50;
   let scrollPos = $(window).scrollTop();

   checkScroll(scrollPos, introHeight)

   $(window).on("scroll load resize", function() {

      introHeight = intro.innerHeight()-50;
      scrollPos = $(window).scrollTop();

      checkScroll(scrollPos, introHeight)
   });

   function checkScroll(scrollPos, introHeight) {
      if(scrollPos > introHeight) {
         header.addClass('fixed');
      } else {
         header.removeClass('fixed');
      }
   }

   // smooth skroll
   $("[data-scroll]").on("click", function(even) {
      even.preventDefault();

      let elementId = $(this).data('scroll'); // get id elements in variable
      let elementOffset = $(elementId).offset().top;

      $('html, body').animate({
         scrollTop: elementOffset - 90
      }, 700);
   });

});