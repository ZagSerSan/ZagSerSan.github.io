$(function() {

	// fixed header and burger menu

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkscroll(scrollPos, introH);

	$(window).on("scroll load resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		scrollPos += 100;

		console.log(scrollPos);
		console.log(introH);

		checkscroll(scrollPos, introH);

	});

	function checkscroll(scrollPos, introH) {
		if (scrollPos>=introH) {
			header.addClass("fixed");
			navPos.css("top", "70px");
		}
		else {
			header.removeClass("fixed");
			navPos.css("top", "110px");
		}
	};

	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let btn = $("#btnNav"); // определяем элемент, к которому будем применять условия 
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

	//smooth scroll

	$("[data-scroll]").on('click', function (event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		console.log(elementOffset);

		$("html, body").animate({
			scrollTop: elementOffset - 80
		}, 700);

	});

	//button
	let btn = $("#btnNav").click(function() {
		btn.toggleClass('active');
	});

	let navPos = $("#burger-nav");

		


});