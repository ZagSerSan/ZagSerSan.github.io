// filter
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

// modal
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

// modals
const allWorkItems = document.querySelectorAll("[data-modal]");
const allModalWokr_btnClose = document.querySelectorAll('#btn_work_close');
const allModals_bg = document.querySelectorAll('.modal-bg');
const allModals_inner = document.querySelectorAll('.modal-work');

allWorkItems.forEach(item => {
   item.addEventListener('click', ()=> {
      var modal_bg = document.getElementById(item.getAttribute('data-modal'));
      var modal_inner = document.getElementById(item.getAttribute('data-submodal'));
      modal_bg.classList.add('show')
      setTimeout(() => {
         modal_inner.classList.add('show')
      }, 10);
   });
});

allModalWokr_btnClose.forEach(btn => {
   btn.addEventListener('click', ()=> {
      allModals_inner.forEach(item => {
         item.classList.remove('show');
      });
      allModals_bg.forEach(item => {
         setTimeout(() => {
            item.classList.remove('show');
         }, 300);
      });
   });
});

// smart switch between work items
