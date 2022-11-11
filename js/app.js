$(function () {
/*
var linkJs = $("a[data-link]");

// fixed header
let header = $('#headerJS');
let intro = $('#introJS');
let introHeight;
let scrollPos;


$(window).on('scroll load', function (scrollPos, introHeight) {
   introHeight = intro.innerHeight()-80;
   scrollPos = $(document).scrollTop();
   if (scrollPos > introHeight) {
      header.addClass('fixed')
   } else {
      header.removeClass('fixed')
   }
});

// nav link
   // $('[data-link]').on('click', function (even) {
   //   even.preventDefault();
     
   //   var linkJs = $("a[data-link]");
   //   linkJs.removeClass('active');
   //   var $this = $(this);
   //   $this.toggleClass('active');
   // });

// smooth scroll

$('[data-scroll]').on('click', function (even) {
   even.preventDefault();
   let elementId = $(this).data('scroll'); // get id elements in variable
   let elementOffset = $(elementId).offset().top;
   $('html, body').animate({
      scrollTop: elementOffset - 30
   }, 800);
   linkJs.removeClass('active');
   var $this = $(this);
     $this.addClass('active');
})
*/
   
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
       
});// jquery

//? =========================== Java Script =================================

var header = document.getElementById('headerJS');
var introH;
var scrollPos;

window.addEventListener('load', (scrollPos,introH) => {
   introH = document.getElementById('introJS').scrollHeight - 60;
   scrollPos = window.pageYOffset;
   if (scrollPos > introH) {
      header.classList.add('fixed');
   } else {
      header.classList.remove('fixed');
   }
});

window.addEventListener('scroll', function (scrollPos,introH) {
   introH = document.getElementById('introJS').scrollHeight - 60;
   scrollPos = window.pageYOffset;

   if (scrollPos > introH) {
      header.classList.add('fixed');
   } else {
      header.classList.remove('fixed');
   }
});

window.addEventListener('scroll', function (scrollPos,introH) {
   scrollPos = window.pageYOffset;
   introH = document.getElementById('introJS').scrollHeight - 60;

   // links Height
   var aboutH = document.getElementById('about').scrollHeight;
   var quantityH = document.getElementById('quantity').scrollHeight;
   var serviceH = document.getElementById('service').scrollHeight;
   
   // Links
   var anhors = document.querySelectorAll('a[href^="#"]');
   var aboutL = document.querySelector('a[href="#about"]');

   anhors.forEach((item) => {
      item.classList.remove('active');
   });
   if (scrollPos < introH) {
      aboutL.classList.remove('active');
   } else if ((introH < scrollPos) && (scrollPos < introH+aboutH)) {
      document.querySelector('a[href="#about"]').classList.add('active');

      console.log('1');
   } else if (scrollPos > (introH+aboutH) && scrollPos < (introH+aboutH+quantityH)) {
      document.querySelector('a[href="#about"]').classList.remove('active');
      console.log('2');
   } else if ( (scrollPos>(introH+aboutH+quantityH)) && (scrollPos<(introH+aboutH+quantityH+serviceH)) ) {
      document.querySelector('a[href="#service"]').classList.add('active');
      console.log('3');
   } else {
      console.log('4');
      document.querySelector('a[href="#service"]').classList.remove('active');
   }
});


function activeLink(elSelector,activeClass) {
   const links = document.querySelectorAll(elSelector)
   
   links.forEach((thisLink) => {
      thisLink.addEventListener('click', (e) => {
         e.preventDefault();
         // links.forEach((allLinks) => {
         //    allLinks.classList.remove(activeClass);
         // });
         // thisLink.classList.add(activeClass);

         // координата якоря
         coordY = document.querySelector(thisLink.getAttribute('href')).getBoundingClientRect().top + window.scrollY;
         window.scrollTo({
            top: coordY,
            behavior: 'smooth'
         });   
      });
   });
}

activeLink('#navLinkJs','active');

