$(function () {
	

	/* Filter
	=====================================*/
	let filter = $("[data-filter]");

	filter.on("click", function (event) {
		event.preventDefault();
		
		let cat = $(this).data('filter');

		if (cat == 'all') {
			$("[data-cat]").removeClass('hide');
		} else {
			$("[data-cat]").each(function () {

			let workCat = $(this).data('cat');

				if (cat != workCat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});



	/* Modal
	=====================================*/

	/* Открытие */

	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");

	modalCall.on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).addClass('show');
		$("body").addClass('no-scroll');

		setTimeout(function () {
			$(modalId).find(".modal__dialog").css({
				transform: "scale(1)"
			});
		}, 10);

		$('[data-slider="slick"]').slick('setPosition');

	});

	let modal_move = $("#modal_move_js");
	let modalResume = $('#modal_resume');
	let modalHireMe = $('#modal_hire_me');

	modal_move.on('click', function (event) {
		event.preventDefault();

		$(modalResume).removeClass('show');
		$(modalHireMe).addClass('show');

		setTimeout(function () {
			$(modalHireMe).find(".modal__dialog").css({
				transform: "scale(1)"
			});
		}, 10);

	});

	/* Закрытие */

	modalClose.on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		let modalParent = $this.parents('.modal');

		modalParent.find(".modal__dialog").css({
			transform: "scale(0)"
		});
		
		setTimeout(function () {
			modalParent.removeClass('show');
			$("body").removeClass('no-scroll');
		}, 400);

	});

	$('.modal').on('click', function (event) {
		$this = $(this);
		$this.find(".modal__dialog").css({
			transform: "scale(0)"
		});

		setTimeout(function () {
			$this.removeClass('show');
			$("body").removeClass('no-scroll');
		}, 400);
		

	});


	$('.modal__dialog').on('click', function (event) {
		event.stopPropagation();
	});




	/* Slider: https://kenwheeler.github.io/slick/
	=====================================*/

	$('[data-slider="slick"]').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade: true,
	  arrows: false,
	  dots: true
	});

	$('.slickPrev').on('click', function (event) {
		event.preventDefault();

		let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

		currentSlider.slick('slickPrev');
	})


	$('.slickNext').on('click', function (event) {
		event.preventDefault();

		let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

		currentSlider.slick('slickNext');
	});


	/* Burger
	=====================================*/

	let header_burger = $("#header-burger");
	let header_burger_icon = $("#header-burger-icon");

	header_burger_icon.on('click', function (event) {
		event.preventDefault();

		header_burger.toggleClass('active');
		$('body').toggleClass('no-scroll');
	});

	let data_closeburger = $("[data-closeburger]");

	data_closeburger.on('click', function (event) {
		event.preventDefault();

		let $this = $(this);
		let burger = $this.data('closeburger');

		$(burger).removeClass('active');
		$('body').removeClass('no-scroll');


	});

	/* Header Fixed
	=====================================*/
		// fixed header and burger menu

		let header = $("#header");
		let intro = $("#intro");
		let introH = intro.innerHeight();
		let scrollPos = $(window).scrollTop();

		$(window).on("scroll load resize", function() {
			introH = intro.innerHeight();
			scrollPos = $(this).scrollTop();
			scrollPos += 100;

			checkscroll(scrollPos, introH);

		});

		function checkscroll(scrollPos, introH) {
			if (scrollPos>=introH) {
				header.addClass("fixed");
			}
			else {
				header.removeClass("fixed");
			}

		};

		$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let btn_nav = $("#nav-burger-JS"); // определяем элемент, к которому будем применять условия 
        						//(можем указывать ID, класс либо любой другой идентификатор элемента)
	        if (!btn_nav.is(e.target) // проверка условия если клик был не по нашему блоку
	            && btn_nav.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
	            btn_nav.removeClass("active"); // если условия выполняются - скрываем наш элемент
	        }
	    });

	    $('#nav-burger-JS').on('click', function (event) {
			event.stopPropagation();
		});

		$(document).scroll(function (e){
		let btn_nav = $("#nav-burger-JS"); // определяем элемент, к которому будем применять условия 
	        if (!btn_nav.is(e.target) && btn_nav.has(e.target).length === 0) {
	            btn_nav.removeClass("active");
	        }
	    });


		//smooth scroll

		$("[data-scroll]").on('click', function (event) {
			event.preventDefault();

			let elementId = $(this).data('scroll');
			let elementOffset = $(elementId).offset().top;

			$("html, body").animate({
				scrollTop: elementOffset - 100
			}, 700);

		});

});