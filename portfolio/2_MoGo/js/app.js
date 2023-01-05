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
       
});// jquery ================================================================

//? =========================== Java Script =================================

//?---------------- burger ----------------

var burger = document.getElementById('burgerJS');
var nav = document.getElementById('navJS');

burger.addEventListener('click', (e) => {
   e.preventDefault();
   burger.classList.toggle('active');
   nav.classList.toggle('active');
});

//?---------------- fixed header ----------------
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
   introH = document.getElementById('introJS').scrollHeight - 70;
   scrollPos = window.pageYOffset;

   if (scrollPos > introH) {
      header.classList.add('fixed');
   } else {
      header.classList.remove('fixed');
   }
});

//?---------------- smooth scroll ----------------
window.addEventListener('scroll', function (scrollPos,introH) {
   nav.classList.remove('active');
   burger.classList.remove('active');
   scrollPos = window.pageYOffset;
   introH = document.getElementById('introJS').scrollHeight - 100;

   // Links
   var anhors = document.querySelectorAll('a[href^="#"]');
   var aboutL = document.querySelector('a[href="#about"]');
   var serviceL = document.querySelector('a[href="#service"]');
   var workL = document.querySelector('a[href="#work"]');

   // links Height
   var aboutH = document.getElementById('about').scrollHeight + introH;
   var quantityH = document.getElementById('quantity').scrollHeight + aboutH;
   var serviceH = document.getElementById('service').scrollHeight + quantityH;
   var logosH = (document.getElementById('logos').scrollHeight) - 120 + document.getElementById('logos').getBoundingClientRect().top + window.scrollY;
   var workH = document.getElementById('work').scrollHeight + logosH;

   anhors.forEach((item) => {
      item.classList.remove('active');
   });

   if (scrollPos < introH) {
      aboutL.classList.remove('active');
   } else if ((scrollPos > introH) && (scrollPos < aboutH)) {
      aboutL.classList.add('active');
   } else if (scrollPos > aboutH && scrollPos < quantityH) {
      aboutL.classList.remove('active');
   } else if (scrollPos > quantityH && scrollPos<serviceH) {
      serviceL.classList.add('active');
   } else if (scrollPos > logosH && scrollPos < workH) {
      workL.classList.add('active');
   } else if ( scrollPos > (document.getElementById('blog').getBoundingClientRect().top + window.scrollY - 100) && scrollPos < ((document.getElementById('blog').getBoundingClientRect().top + window.scrollY - 100)+(document.getElementById('blog').scrollHeight))) {
      document.querySelector('a[href="#blog"]').classList.add('active');
   } else if (scrollPos > ((document.getElementById('blog').getBoundingClientRect().top + window.scrollY - 100)+(document.getElementById('blog').scrollHeight))) {
      document.querySelector('a[href="#blog"]').classList.remove('active');
      document.querySelector('a[href="#footer"]').classList.add('active');
   } else {
      anhors.forEach((item) => {
         item.classList.remove('active');
      });
   }
});

//?---------------- click link ----------------
function activeLink(elSelector,activeClass) {
   const links = document.querySelectorAll(elSelector)
   
   links.forEach((thisLink) => {
      thisLink.addEventListener('click', (e) => {
         e.preventDefault();
         links.forEach((allLinks) => {
            allLinks.classList.remove(activeClass);
         });
         thisLink.classList.add(activeClass);

         // координата якоря
         coordY = document.querySelector(thisLink.getAttribute('href')).getBoundingClientRect().top + window.scrollY;
         window.scrollTo({
            top: coordY-50,
            behavior: 'smooth'
         });   
      });
   });
}
activeLink('#navLinkJs','active');

// accordion
var accordion_items = document.querySelectorAll('#accordion-itemJS');

accordion_items.forEach((item) => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      accordion_items.forEach(allItems => {
         allItems.classList.remove('active');
      });
      item.classList.add('active');
   });
});
