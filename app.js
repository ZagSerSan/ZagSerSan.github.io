$(function() {

// fixed header and arroUp
    let header = $("#header");
    let intro = $("#intro");
    let introH = $(intro).innerHeight();
    scrollPos = $(window).scrollTop();

    let arroUp = $("#to__top-pos");

    $(window).on('scroll load resize', function() {
        scrollPos = $(this).scrollTop();
        scrollPos += 40

        if (scrollPos > introH) {
            header.addClass('fixed')
            arroUp.addClass('show')
        }
        else {
            header.removeClass('fixed')
            arroUp.removeClass('show')
        }


    });



// burger
    let burger = $("#burger-nav").click(function() {
        burger.toggleClass('active');
    });

    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let burger = $("#burger-nav"); // определяем элемент, к которому будем применять условия 
                                //(можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!burger.is(e.target) // проверка условия если клик был не по нашему блоку
            && burger.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            burger.removeClass("active"); // если условия выполняются - скрываем наш элемент
        }
    });

    $(document).scroll(function (e){
        if (!burger.is(e.target) && burger.has(e.target).length === 0) {
            burger.removeClass("active");
        }
    });



// scroll to block
    $("[data-scroll]").on('click load resize', function (event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        let elemenH = $(elementId).innerHeight();

        elementOffset -= 30

        $("html, body").animate({
            scrollTop: elementOffset 
        }, 400);
    
    });



//  btn "предложить работу"
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

    $("social__link").click(function(event){
        event.preventDefault();
    });


    let linkSocial = $("#linkSocial").click(function() {
        btn.toggleClass('active');
    });


});