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

function activeLink(elSelector,activeClass) {
   const links = document.querySelectorAll(elSelector)
   
   links.forEach((thisLink) => {
      thisLink.addEventListener('click', (e) => {
         e.preventDefault();
         links.forEach((allLinks) => {
            allLinks.classList.remove(activeClass);
         });
         thisLink.classList.add(activeClass);
      });
   })
}

activeLink('#navLinkJs','active');