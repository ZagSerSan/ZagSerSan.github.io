var header = document.getElementById('headerJS');
var introH;
var scrollPos;

window.addEventListener('scroll', function (scrollPos,introH,navLink) {
   introH = document.getElementById('introJS').scrollHeight - 70;
   scrollPos = window.pageYOffset;

   if (scrollPos > introH) {
      header.classList.add('fixed');
   } else {
      header.classList.remove('fixed');
   }

   console.log(introH);
   console.log(scrollPos);
});


function activeLink(elSelector) {
   const navLinks = document.querySelectorAll(elSelector);

   navLinks.forEach((thisLink) => {
      thisLink.addEventListener('click', (e) => {
         navLinks.forEach((allLinks) => {
            allLinks.classList.remove('active');
         });
         e.preventDefault();
         thisLink.classList.add('active');
      });
   });
}

activeLink('#navLinkJs');