$(function () {

//=====================burger==========================

	let header = $(".header");
	let header_scroll = $(".header-scroll");
	let intro = $(".intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		scrollPos += 100;

		window_width = $(this).innerWidth();

		checkscroll_desktop(scrollPos, introH);
		checkscroll_mobile(scrollPos, introH);

	});

	function checkscroll_desktop(scrollPos, introH) {
		if (scrollPos>=introH && window_width>750) {
			header_scroll.addClass("show");
		}
		else {
			header_scroll.removeClass("show");
		}
	};

	function checkscroll_mobile (scrollPos, introH) {
		if (scrollPos>=introH && window_width<751) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}
	};

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


//=====================Script bgimgjs==========================

  //============intro//============

	let intro_isrc = document.getElementById('intro-bgimgjs').src;
	
	$('.intro-bgimgjs img').css({'display':'none'});
	
	$('.intro-bgimgjs').css({'background-image':'url('+intro_isrc+')',
							'background-position':'center',
							'background-repeat':'no-repeat',
							'background-size':'cover'});
	
  //============products//============
	let products_isrc1 = document.getElementById('products-bgimgjs-1').src;
	let products_isrc2 = document.getElementById('products-bgimgjs-2').src;
	let products_isrc3 = document.getElementById('products-bgimgjs-3').src;
	let products_isrc4 = document.getElementById('products-bgimgjs-4').src;
	
	// products-1
	$('.products-bgimgjs-1 img').css({'display':'none'});
	$('.products-bgimgjs-2 img').css({'display':'none'});
	$('.products-bgimgjs-3 img').css({'display':'none'});
	$('.products-bgimgjs-4 img').css({'display':'none'});

	$('.products-bgimgjs-1').css({'background-image':'url('+products_isrc1+')',
							'background-position':'center',
							'background-repeat':'no-repeat',
							'background-size':'cover'});
	$('.products-bgimgjs-2').css({'background-image':'url('+products_isrc2+')',
							'background-position':'center',
							'background-repeat':'no-repeat',
							'background-size':'cover'});
	$('.products-bgimgjs-3').css({'background-image':'url('+products_isrc3+')',
							'background-position':'center',
							'background-repeat':'no-repeat',
							'background-size':'cover'});
	$('.products-bgimgjs-4').css({'background-image':'url('+products_isrc4+')',
							'background-position':'center',
							'background-repeat':'no-repeat',
							'background-size':'cover'});
});