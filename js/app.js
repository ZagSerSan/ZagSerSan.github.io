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

