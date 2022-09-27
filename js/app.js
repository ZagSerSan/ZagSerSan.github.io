$(function () {
  
   let linkEl = $('#link');
   
   $('[data-link]').on('click', function (even) {
     even.preventDefault();
     var $this = $(this);
     $this.toggleClass('active');
   });
   
   
   
   });