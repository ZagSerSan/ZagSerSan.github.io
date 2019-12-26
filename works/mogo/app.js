$(function() {

// fixed header and burger menu

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on('scroll load', function() {
		scrollPos = $(this).scrollTop();
		scrollPos += 40;

		if (scrollPos > introH) {
			header.addClass('fixed');
		}
		else {
			header.removeClass('fixed');
		}
	});

//btn

	let btn = $("#burger");
	btn.click(function() {
		btn.toggleClass('active');
	});

// smooth scroll

	$("[data-scroll]").on('click load resize', function (event) {
		event.preventDefault();
		
		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset -35
		}, 1000);
	});

// clouse of scroll and tap

	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let btn = $("#burger"); // определяем элемент, к которому будем применять условия 
        						//(можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!btn.is(e.target) // проверка условия если клик был не по нашему блоку
            && btn.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            btn.removeClass("active"); // если условия выполняются - скрываем наш элемент
        }
    });

	$(document).scroll(function (e){
        if (!btn.is(e.target) && btn.has(e.target).length === 0) {
            btn.removeClass("active");
        }
    });

// fixed after line

	let sau = $("#sau");
	let sauH = sau.innerHeight();

	let sauLink = $("#navLink");

	let sauOffsetStart = sau.offset().top;
	let sauOffsetEnd = sauOffsetStart + sauH;

	$(window).on('scroll', function() {

		if (scrollPos < sauOffsetStart) {
			sau.removeClass('active');
		}
		else if (scrollPos > sauOffsetEnd) {
			sauLink.removeClass('active');
		}
		else {
			sauLink.addClass('active');
		}

	});

// accordion

	$("[data-collspace]").on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('active');

	});

	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});


});