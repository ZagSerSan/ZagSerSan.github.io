$(function () {

// fixed header
let header = $('#headerJS');
let intro = $('#introJS');
let introHeight;
let scrollPos;

$(window).on('scroll load', function (scrollPos, introHeight) {
   introHeight = intro.innerHeight()-70;
   scrollPos = $(document).scrollTop();
   if (scrollPos > introHeight) {
      header.addClass('fixed')
   } else {
      header.removeClass('fixed')
   }
});

// nav link
   $('[data-link]').on('click', function (even) {
     even.preventDefault();
     
     var linkJs = $("a[data-link]");
     linkJs.removeClass('active');
     var $this = $(this);
     $this.toggleClass('active');
   });
   
// slider
let sliderQuote = $('#sliderQuote');
let sliderReview = $('#sliderReview');

sliderQuote.slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true
});
sliderReview.slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true
});
       
});