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
let slider = $('#quoteSlider');

   slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true
    });
       
});