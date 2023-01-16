//todo ============ TODO_TEMP =============================================
// todo_1) модальные окна

//? ============ BURGER ==================================================
let burger = document.getElementById('burgerJS');
let nav = document.getElementById('navJS');
//  button hireme in media440px
// let btnHeader_hierme = document.querySelector('.btnHeaderJS');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   nav.classList.toggle('active');
   // btnHeader_hierme.classList.toggle('show');
});

//? ============ FIXED HEADER =============================================
let header;
let introH;
let scrollPos;

window.addEventListener('scroll', function (header, introH, scrollPos) {
   header = document.getElementById('header');
   introH = document.getElementById('intro').clientHeight-210;
   scrollPos = window.pageYOffset;

   if (scrollPos > introH) {
      header.classList.add('fixed');
   } else {
      header.classList.remove('fixed');
   }
   // burger nav close by scroll
   burger.classList.remove('active');
   nav.classList.remove('active');
   // btnHeader_hierme.classList.remove('show');
});
window.addEventListener('load', function (header, introH, scrollPos) {
   header = document.getElementById('header');
   introH = document.getElementById('intro').clientHeight-210;
   scrollPos = window.pageYOffset;

   if (scrollPos > introH) {
      header.classList.add('fixed');
   } else {
      header.classList.remove('fixed');
   }
   // burger nav close by scroll
   burger.classList.remove('active');
   nav.classList.remove('active');
   // btnHeader_hierme.classList.remove('show');
});

//? ============ SMOOTH SCROLL =============================================
const allHeaderLinks = document.querySelectorAll('.navlinkJS');

allHeaderLinks.forEach(item => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      
      coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
         top: coordY-150,
         behavior: 'smooth'
      });
      burger.classList.remove('active');
      nav.classList.remove('active');
   });
});

//? ============ INTERACTIVE SCROLL =============================================
let introOffset;
let workOffset;
// let aboutOffset;
// let reviewsOffset;
// let blogOffset;
// ccылки меню
let navLink_work;

window.addEventListener('scroll', function (scrollPos, introOffset, workOffset, aboutOffset, reviewsOffset, blogOffset, navLink_work) {
// отступ скролла от верха
   scrollPos = window.pageYOffset;
// отступы блоков от верха
   introOffset = document.getElementById('intro').getBoundingClientRect().top + window.scrollY-160;
   workOffset = document.getElementById('work').getBoundingClientRect().top + window.scrollY-160;
   aboutOffset = document.getElementById('about').getBoundingClientRect().top + window.scrollY-160;
   // reviewsOffset = document.getElementById('reviews').getBoundingClientRect().top + window.scrollY-160;
   // blogOffset = document.getElementById('blog').getBoundingClientRect().top + window.scrollY-160;

   // console.log(scrollPos);
   // console.log(introOffset);
   // console.log(aboutOffset);

   if ((scrollPos > workOffset) && (scrollPos < aboutOffset)) {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
         // console.log('here');
      });
      navLink_work = document.querySelector('a[data-scroll="work"]').classList.add('active');
   } else if (scrollPos > aboutOffset) {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
      navLink_work = document.querySelector('a[data-scroll="about"]').classList.add('active');
   } /*else if ((scrollPos > reviewsOffset) && (scrollPos < blogOffset)) {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
      navLink_work = document.querySelector('a[data-scroll="reviews"]').classList.add('active');
   }  else if (scrollPos > blogOffset) {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
      navLink_work = document.querySelector('a[data-scroll="blog"]').classList.add('active');
   }*/ else {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
   }
});

//? ============ FILTER =============================================
// все ссылки фильтра
var allLinks = document.querySelectorAll('a[data-filter]');
// btns
var btn_all = document.querySelector('.btn_all');
var btn_lending = document.querySelector('.btn_lending');
var btn_website = document.querySelector('.btn_website');
var btn_int = document.querySelector('.btn_int');
var btn_loadMoreWorks = document.getElementById('loadmoreworks');
// проекты с фильтрами
const lending_projects = document.querySelectorAll('#lending');
const website_projects = document.querySelectorAll('#website');
const int_projects = document.querySelectorAll('#int');

// скролл после применения фильтра при media 900px
function filterScroll() {
   let coordY_portfolio = document.querySelector('.portfolioJS').getBoundingClientRect().top + window.scrollY;
   window.scrollTo({
      top: coordY_portfolio - 160,
      behavior: 'smooth'
   });
}
window.addEventListener('load', () => {
   if (window.matchMedia("(max-width: 900px)").matches) {
      allLinks.forEach(item => {
         item.addEventListener('click', filterScroll);
      });
   } else {
      allLinks.forEach(item => {
         item.removeEventListener('click', filterScroll);
      });
   }
});

// отслеживание нажатия
/* btn_loadMoreWorks.addEventListener('click', (e) => {
   e.preventDefault();
   btn_all.classList.add('active');
   btn_lending.classList.remove('active');
   btn_website.classList.remove('active');
   btn_int.classList.remove('active');

   lending_projects.forEach(item => {
      item.classList.remove('hide');
   });
   webs1_ActiveBox1_ActiveBoxite_projects.forEach(item => {
      item.classList.remove('hide');
   });
   int_projects.forEach(item => {
      item.classList.remove('hide');
   });
}); */

//* ===== BTN FUNCTIONS =====
btn_all.addEventListener('click', (e) => {
   e.preventDefault();
   btn_all.classList.add('active');
   btn_lending.classList.remove('active');
   btn_website.classList.remove('active');
   btn_int.classList.remove('active');

   lending_projects.forEach(item => {
      item.classList.remove('hide');
   });
   website_projects.forEach(item => {
      item.classList.remove('hide');
   });
   int_projects.forEach(item => {
      item.classList.remove('hide');
   });
});
btn_lending.addEventListener('click', (e) => {
   e.preventDefault();
   btn_lending.classList.add('active');
   btn_all.classList.remove('active');
   btn_website.classList.remove('active');
   btn_int.classList.remove('active');

   lending_projects.forEach(item => {
      item.classList.remove('hide');
   });
   website_projects.forEach(item => {
      item.classList.add('hide');
   });
   int_projects.forEach(item => {
      item.classList.add('hide');
   });
});
btn_website.addEventListener('click', (e) => {
   e.preventDefault();
   btn_website.classList.add('active');
   btn_all.classList.remove('active');
   btn_lending.classList.remove('active');
   btn_int.classList.remove('active');

   website_projects.forEach(item => {
      item.classList.remove('hide');
   });
   lending_projects.forEach(item => {
      item.classList.add('hide');
   });
   int_projects.forEach(item => {
      item.classList.add('hide');
   });
});
btn_int.addEventListener('click', (e) => {
   e.preventDefault();
   btn_int.classList.add('active');
   btn_all.classList.remove('active');
   btn_website.classList.remove('active');
   btn_lending.classList.remove('active');

   int_projects.forEach(item => {
      item.classList.remove('hide');
   });
   website_projects.forEach(item => {
      item.classList.add('hide');
   });
   lending_projects.forEach(item => {
      item.classList.add('hide');
   });
});

//todo_1

//? ============ MODAL =============================================
//* ===== BTN_CLOSE =====

const btn_close = document.querySelectorAll('#btn_modal_close');
var body = document.querySelector('body');

btn_close.forEach(btn => {
   btn.addEventListener('click', (e) => {
      body.classList.remove('noscroll');
      modal_hireme.style.transform="scale(0)";
      modal_hireme_bg.style.background='none';
      modal_resume.style.transform="scale(0)";
      modal_resume_bg.style.background='none';
      setTimeout(function(){
         modal_hireme_bg.classList.remove('show');
      }, 300);
      setTimeout(() => {
         modal_resume_bg.classList.remove('show');
      }, 300);
   });
});

//* ===== WORK ITEMS and MODAL ======================================
const allWorkItems = document.querySelectorAll("[data-modal]");
const allModalWokr_btnClose = document.querySelectorAll('#btn_work_close');
const allModals_inner = document.querySelectorAll('.modal-work');

// скрытие фона с задержкой
allWorkItems.forEach(item => {
   item.addEventListener('click', ()=> {
      let modal_bg = document.getElementById('modal_bg');
      let modal_inner = document.getElementById(item.getAttribute('data-modal'));
      // тестовое
      let test = document.querySelector('.test');

      // переключение кнопок-ссылок фильтра при нажании на ворк_айтем
      let attrDataFilter = item.getAttribute('data-filter')
      const allThisIdLink = document.querySelectorAll(attrDataFilter);
      let filterLink = document.querySelector(`a[href="${attrDataFilter}"]`);

      // scroll to changed item
      setTimeout(() => {
         let itemCoordY = item.getBoundingClientRect().top + window.scrollY;
         // console.log(itemCoordY);
         window.scrollTo({
            top: itemCoordY-150,
            behavior: 'smooth'
         });
      }, 400);
      
      btn_all.classList.remove('active');
      filterLink.classList.add('active')
      allWorkItems.forEach(allLink => {
         allLink.classList.add('hide');
      });
      allThisIdLink.forEach(thisLink => {
         thisLink.classList.remove('hide');
      });

      test.classList.add('show');

      body.classList.add('noscroll');
      modal_bg.classList.add('display');
      setTimeout(() => {
         modal_bg.classList.add('bg');
      }, 100);

      setTimeout(() => {
         modal_inner.classList.add('active');
      }, 100);
   });
});
allModalWokr_btnClose.forEach(btn => {
   btn.addEventListener('click', ()=> {
      body.classList.remove('noscroll');
      
      allModals_inner.forEach(item => {
         item.classList.remove('active');
      });
      modal_bg.classList.remove('bg');
      setTimeout(() => {
         modal_bg.classList.remove('display');
      }, 400);

      modal_bg.classList.remove('bg');
         setTimeout(() => {
            item.classList.remove('show');
            item.style.display = 'none';
         }, 300);
      });
   });
// });

//* ===== smart switch between work items =====

// get "next" and "prev" buttons
const btns_prev = document.querySelectorAll('#btn_prev');
const btns_next = document.querySelectorAll('#btn_next');

btns_prev.forEach(item => {
   // событие нажания на 'эту' кнопку 'предыдущий':
   item.addEventListener('click', () => {
      // получаем текущее открытое модальное окно
      let openNow = document.getElementById(item.getAttribute('data-openmodal'));
      // получаем предыдущее модальное окно
      let prev_modal = document.getElementById(item.getAttribute('data-prev'));

   // текущее открытое модальное окно
      openNow.classList.add('trX_right');
      openNow.classList.remove('active');
      setTimeout(() => {
         openNow.classList.remove('trX_right');
      }, 200);

   // предыдущее модальное окно
      prev_modal.classList.add('trX_left');
      prev_modal.classList.add('active');
      setTimeout(() => {
         prev_modal.classList.remove('trX_left');
      }, 170);
   });
});
btns_next.forEach(item => {
   item.addEventListener('click', () => {
      let openNow = document.getElementById(item.getAttribute('data-openmodal'));
      let next_modal = document.getElementById(item.getAttribute('data-next'));

   // текущее открытое модальное окно
      openNow.classList.add('trX_left');
      openNow.classList.remove('active');
      setTimeout(() => {
         openNow.classList.remove('trX_left');
      }, 200);
   // следующее модальное окно
      next_modal.classList.add('trX_right');
      next_modal.classList.add('active');
      setTimeout(() => {
         next_modal.classList.remove('trX_right');
      }, 170);
   });
});
