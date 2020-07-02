$(function () {

//=====================burger==========================

	let header_burger = $("#header-burger");
	let header_burger_icon = $("#header-burger-icon");

	header_burger_icon.on('click', function (event) {
		event.preventDefault();

		header_burger.toggleClass('active');

	});

	let data_closeburger = $("[data-closeburger]");

	data_closeburger.on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		let burger = $this.data('closeburger');

		$(burger).removeClass('active');

	});


//=====================Script==========================

	// получить атрибут 'src';
	let img_src = document.getElementById('intro-img').src;

	//скрыть img в html
	$('.intro-column img').css({
	  'display':'none'
	});

	//img_src засунуть в bg
	$('.bgimg').css('background-image' ,'url('+img_src+')');


});