$(function() {

	// fixed header and burger menu

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on('scroll load', function() {
		scrollPos = $(this).scrollTop();
		scrollPos += 40;

		console.log(scrollPos);

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

});