$(function() {



// fixed header and burger menu

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkscroll (scrollPos)

	$(window).on('scroll load', function() {
		scrollPos = $(this).scrollTop();
		scrollPos += 40;

		checkscroll (scrollPos)
	});

	function checkscroll (scrollPos) {
		if (scrollPos > introH) {
			header.addClass('fixed');
		}
		else {
			header.removeClass('fixed');
		}
	}


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
		let elemenH = $(elementId).innerHeight();

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



// accordion

	$("[data-collspace]").on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('active');

	});

	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let btnAccord1 = $("#accordion__item1"); // определяем элемент, к которому будем применять условия 
        let btnAccord2 = $("#accordion__item2"); // определяем элемент, к которому будем применять условия 
        let btnAccord3 = $("#accordion__item3"); // определяем элемент, к которому будем применять условия 
        						//(можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!btnAccord1.is(e.target) // проверка условия если клик был не по нашему блоку
            && btnAccord1.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            btnAccord1.removeClass("active"); // если условия выполняются - скрываем наш элемент
        }
        if (!btnAccord2.is(e.target) // проверка условия если клик был не по нашему блоку
            && btnAccord2.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            btnAccord2.removeClass("active"); // если условия выполняются - скрываем наш элемент
        }
        if (!btnAccord3.is(e.target) // проверка условия если клик был не по нашему блоку
            && btnAccord3.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            btnAccord3.removeClass("active"); // если условия выполняются - скрываем наш элемент
        }
        
    });



// slider

	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	


});