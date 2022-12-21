//todo ============ TODO =============================================
// переключение фильтра по нажатию на айтем определённой категории.

//? ============ BURGER ==================================================
let burger = document.getElementById('burgerJS');
let nav = document.getElementById('navJS');
//  button hireme in media440px
let btnHeader_hierme = document.querySelector('.btnHeaderJS');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   nav.classList.toggle('active');
   btnHeader_hierme.classList.toggle('show');
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
   btnHeader_hierme.classList.remove('show');
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
// heights blocks: headerH = header Height
let introOffset;
let workOffset;
let aboutOffset;
let reviewsOffset;
let blogOffset;
// ccылки меню
let navLink_work;

window.addEventListener('scroll', function (scrollPos, introOffset, workOffset, aboutOffset, reviewsOffset, blogOffset, navLink_work) {
// отступ скролла от верха
   scrollPos = window.pageYOffset;
// отступы блоков от верха
   introOffset = document.getElementById('intro').getBoundingClientRect().top + window.scrollY-160;
   workOffset = document.getElementById('work').getBoundingClientRect().top + window.scrollY-160;
   aboutOffset = document.getElementById('about').getBoundingClientRect().top + window.scrollY-160;
   reviewsOffset = document.getElementById('reviews').getBoundingClientRect().top + window.scrollY-160;
   blogOffset = document.getElementById('blog').getBoundingClientRect().top + window.scrollY-160;

   if ((scrollPos > workOffset) && (scrollPos < aboutOffset)) {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
      navLink_work = document.querySelector('a[data-scroll="work"]').classList.add('active');
   } else if ((scrollPos > aboutOffset) && (scrollPos < reviewsOffset)) {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
      navLink_work = document.querySelector('a[data-scroll="about"]').classList.add('active');
   } else if ((scrollPos > reviewsOffset) && (scrollPos < blogOffset)) {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
      navLink_work = document.querySelector('a[data-scroll="reviews"]').classList.add('active');
   }  else if (scrollPos > blogOffset) {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
      navLink_work = document.querySelector('a[data-scroll="blog"]').classList.add('active');
   } else {
      allHeaderLinks.forEach(item =>{
         item.classList.remove('active');
      });
   }
});


//? ============ FILTER =============================================
// все ссылки фильтра
var allLinks = document.querySelectorAll('a[data-filter]');
// btns
var btn_all = document.getElementById('btn_all');
var btn_app = document.getElementById('btn_app');
var btn_website = document.getElementById('btn_website');
var btn_int = document.getElementById('btn_int');
var btn_loadMoreWorks = document.getElementById('loadmoreworks');
// проекты с фильтрами
const app_projects = document.querySelectorAll('#app');
const website_projects = document.querySelectorAll('#website');
const int_projects = document.querySelectorAll('#int');
// отслеживание нажатия
btn_loadMoreWorks.addEventListener('click', (e) => {
   e.preventDefault();
   btn_all.classList.add('active');
   btn_app.classList.remove('active');
   btn_website.classList.remove('active');
   btn_int.classList.remove('active');

   app_projects.forEach(item => {
      item.classList.remove('hide');
   });
   website_projects.forEach(item => {
      item.classList.remove('hide');
   });
   int_projects.forEach(item => {
      item.classList.remove('hide');
   });
});

//* ===== BTN FUNCTIONS =====
btn_all.addEventListener('click', (e) => {
   e.preventDefault();
   btn_all.classList.add('active');
   btn_app.classList.remove('active');
   btn_website.classList.remove('active');
   btn_int.classList.remove('active');

   app_projects.forEach(item => {
      item.classList.remove('hide');
   });
   website_projects.forEach(item => {
      item.classList.remove('hide');
   });
   int_projects.forEach(item => {
      item.classList.remove('hide');
   });
});
btn_app.addEventListener('click', (e) => {
   e.preventDefault();
   btn_app.classList.add('active');
   btn_all.classList.remove('active');
   btn_website.classList.remove('active');
   btn_int.classList.remove('active');

   app_projects.forEach(item => {
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
   btn_app.classList.remove('active');
   btn_int.classList.remove('active');

   website_projects.forEach(item => {
      item.classList.remove('hide');
   });
   app_projects.forEach(item => {
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
   btn_app.classList.remove('active');

   int_projects.forEach(item => {
      item.classList.remove('hide');
   });
   website_projects.forEach(item => {
      item.classList.add('hide');
   });
   app_projects.forEach(item => {
      item.classList.add('hide');
   });
});

//? ============ MODAL =============================================
//* ===== HIREME and RESUME and BTN_CLOSE =====

const btns_hireme = document.querySelectorAll('#btn_hireme');
const btns_resume = document.querySelectorAll('#btn_resume');
const btn_close = document.querySelectorAll('#btn_modal_close');

var modal_hireme_bg = document.getElementById('modal_hireme_bg');
var modal_hireme = document.getElementById('modal_hireme');

var modal_resume_bg = document.getElementById('modal_resume_bg');
var modal_resume = document.getElementById('modal_resume');
var body = document.querySelector('body');

btns_hireme.forEach(btn => {
   btn.addEventListener('click', (e) => {
      modal_resume.style.transform="scale(0)";
      modal_resume_bg.style.background='none';
      setTimeout(() => {
         modal_resume_bg.classList.remove('show');
      }, 300);
      body.classList.add('noscroll');
      modal_hireme_bg.classList.add('show');
      setTimeout(function(){
         modal_hireme_bg.style.background='rgba(0, 0, 0, 0.6)';
      }, 10);
      setTimeout(function(){
         modal_hireme.style.transform="scale(1)";
      }, 10);
   });
});
btns_resume.forEach(btn => {
   btn.addEventListener('click', () => {
      body.classList.add('noscroll');
      modal_resume_bg.classList.add('show');
      setTimeout(function () {
         modal_resume_bg.style.background='rgba(0, 0, 0, 0.6)';
      }, 10);
      setTimeout(() => {
         modal_resume.style.transform="scale(1)";
      }, 10);
   });
});
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
const allModals_bg = document.querySelectorAll('.modal-bg');
const allModals_inner = document.querySelectorAll('.modal-work');

allWorkItems.forEach(item => {
   item.addEventListener('click', ()=> {
      var modal_bg = document.getElementById(item.getAttribute('data-modal'));
      var modal_inner = document.getElementById(item.getAttribute('data-submodal'));
      body.classList.add('noscroll');
      modal_bg.classList.add('show')
      setTimeout(() => {
         modal_bg.classList.add('bg');
      }, 10);
      setTimeout(() => {
         modal_inner.classList.add('show')
      }, 10);
   });
});
allModalWokr_btnClose.forEach(btn => {
   btn.addEventListener('click', ()=> {
      body.classList.remove('noscroll');
      allModals_inner.forEach(item => {
         item.classList.remove('show');
      });
      allModals_bg.forEach(item => {
         setTimeout(() => {
            item.classList.remove('bg');
         }, 10);
         setTimeout(() => {
            item.classList.remove('show');
         }, 300);
      });
   });
});

//* ===== smart switch between work items =====
// // filter status: if selected filter 
// let status_all = true;
// let status_app = false;
// let status_website = false;
// let status_int = false;

// // modal status: if open/close window
// let status_m1 = false;
// let status_m2 = false;
// let status_m3 = false;
// let status_m4 = false;
// let status_m5 = false;
// let status_m6 = false;
// let status_m7 = false;
// let status_m8 = false;
// let status_m9 = false;

// get "next" and "prev" buttons
const btns_prev = document.querySelectorAll('#btn_prev');
const btns_next = document.querySelectorAll('#btn_next');

btns_prev.forEach(item => {
   item.addEventListener('click', () => {
      let openNow = document.getElementById(item.getAttribute('data-openmodal'));
      let openNow_sub = document.getElementById(item.getAttribute('data-opensubmodal'));
      let prev_modal = document.getElementById(item.getAttribute('data-prev'));
      let prev_submodal = document.getElementById(item.getAttribute('data-subprev'));

      // текущее открытое модальное окно
      openNow_sub.style.opacity="0";
      openNow_sub.classList.add('trX_right');
      setTimeout(() => {
         openNow_sub.classList.remove('show');
         openNow.classList.remove('bg');
      }, 10);
      setTimeout(() => {
         //обнкление стилей js
         openNow_sub.style.opacity="1";
         openNow.classList.remove('show');
         openNow_sub.classList.remove('trX_right');
      }, 300);

      // предыдущее модальное окно
      prev_submodal.style.opacity="0";
      prev_submodal.classList.add('trX_left');
      prev_modal.classList.add('show');
      setTimeout(() => {
         prev_modal.classList.add('bg');
      }, 10);
      setTimeout(() => {
         prev_submodal.style.opacity="1";
         prev_submodal.classList.remove('trX_left');
         prev_submodal.classList.add('show');
      }, 10);
   });
});

btns_next.forEach(item => {
   item.addEventListener('click', () => {
      let openNow = document.getElementById(item.getAttribute('data-openmodal'));
      let openNow_sub = document.getElementById(item.getAttribute('data-opensubmodal'));
      let next_modal = document.getElementById(item.getAttribute('data-next'));
      let next_submodal = document.getElementById(item.getAttribute('data-subnext'));

      // текущее открытое модальное окно
         // стилизация анимации
      openNow_sub.style.opacity="0";
      openNow_sub.classList.remove('show');
      openNow_sub.classList.add('trX_left');

      setTimeout(() => {
         openNow_sub.style.opacity="1";
         openNow_sub.classList.remove('trX_left');
      }, 300);
      setTimeout(() => {
         openNow.classList.remove('bg');
      }, 10);
      setTimeout(() => {
         openNow.classList.remove('show');
      }, 300);

      // следующее модальное окно
      next_modal.classList.add('show');
      //обнуляющие стили перед появлением окна
      next_submodal.style.opacity="0";
      next_submodal.classList.add('trX_right');

      setTimeout(() => {
         next_modal.classList.add('bg');
      }, 10);
      setTimeout(() => {
         next_submodal.classList.add('show');
         next_submodal.style.opacity="1";
         next_submodal.classList.remove('trX_right');
      }, 10);
   });
});