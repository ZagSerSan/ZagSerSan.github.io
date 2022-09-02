$(function() {

   // fixed header
   let header = $('#header');
   let intro = $('#intro');
   let introHeight = intro.innerHeight()-50;
   let scrollPosition = $(window).scrollTop();
   let nav = $('#nav');
   let burger = $('#burger')

   checkScroll (scrollPosition, introHeight);
   
   $(window).on('scroll resize', function(even) {
      even.preventDefault();
      introHeight = intro.innerHeight()-50;
      scrollPosition = $(window).scrollTop();
      checkScroll (scrollPosition, introHeight);
      nav.removeClass('active');
   });

   function checkScroll (scrollPosition, introHeight) {
      if (scrollPosition > introHeight) {
         header.addClass('fixed');
      } else {
         header.removeClass('fixed');
      }
   }

   // smooth scroll by navigation links
   $('[data-scroll]').on("click", function(even) {
      even.preventDefault();
      let elementId = $(this).data('scroll'); // get id elements in variable
      let elementOffset = $(elementId).offset().top;
      $('html, body').animate({
         scrollTop: elementOffset - 90
      }, 700);
   });

   // nav toggle
   burger.on('click', function (even) {
      even.preventDefault();
      nav.toggleClass('active');
   });
   
});