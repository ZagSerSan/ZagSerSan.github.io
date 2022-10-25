var header = document.getElementById('headerJS');
var introH;
var scrollPos;

var navLink = document.getElementById('navLinkJs');

window.addEventListener('scroll', function (scrollPos,introH,navLink) {
   introH = document.getElementById('introJS').scrollHeight - 70;
   scrollPos = window.pageYOffset;

   const navLinks = document.querySelectorAll(navLink);

   if (scrollPos > introH) {
      header.classList.add('fixed');
   console.log(navLinks);
   } else {
      header.classList.remove('fixed');
   }

   console.log(introH);
   console.log(scrollPos);
})

