/*$(function() {

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

});
*/

var div1 = document.getElementById('div1');
var data_align = div1.getAttribute('data-align');
var test_string = document.getElementById('test__string');

function alignEl(data_align, test_string) {

   if (data_align === 'end') {
      test_string.classList.add("align");
      console.log('true');
   } else {
      test_string.classList.remove("align");
      console.log('false');
   }
}

alignEl(data_align, test_string);
