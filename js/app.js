$(function () {
  
   let linkEl = $('#link');
   
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