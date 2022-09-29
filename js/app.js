$(function () {
  
   let linkEl = $('#link');
   
   $('[data-link]').on('click', function (even) {
     even.preventDefault();
     
     var linkJs = $("a[data-link]");
     linkJs.removeClass('active');
     var $this = $(this);
     $this.toggleClass('active');
   });
   
   
   });