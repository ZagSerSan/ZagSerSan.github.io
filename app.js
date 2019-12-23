$( function() {

	let btn = $("#footer-btn");
	let antifon = $("#antifon");

	btn.click(function(){
		btn.toggleClass('active');
	});

	$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let btn = $("#footer-btn"); // определяем элемент, к которому будем применять условия 
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


    $("socialfooterastop").click(function(event){
	    event.preventDefault();
	});

});