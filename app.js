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
        }, 600);
    });

//skils btn
var info =      $('.info');
var info_html = $('#infoJS_html');
var info_css =  $('#infoJS_css');
var info_js =   $('#infoJS_js');
var info_jquery =$('#infoJS_jquery');
var info_phshp =$('#infoJS_phshp');
var info_eng =  $('#infoJS_eng');
var info_learn =$('#infoJS_learn');

var btn_html =  $('#btnJS_html');
var btn_css =   $('#btnJS_css');
var btn_js =    $('#btnJS_js');
var btn_jquery = $('#btnJS_jquery');
var btn_phshp = $('#btnJS_phshp');
var btn_eng =   $('#btnJS_eng');
var btn_learn =   $('#btnJS_rearn');

var srpt = $('#srptJS');

    // если клин на info то не появляться srpt
    info.click(function() {
        srpt.removeClass('active');
    });

    // если клик на skill-item, то info блок и srpt.removeClass
    btn_html.click(function() {
        info_html.toggleClass('active');
        srpt.removeClass('active');
    });

    btn_css.click(function() {
        info_css.toggleClass('active');
        srpt.removeClass('active');
    });

    btn_js.click(function() {
        info_js.toggleClass('active');
        srpt.removeClass('active');
    });

    btn_jquery.click(function() {
        info_jquery.toggleClass('active');
        srpt.removeClass('active');
    });

    btn_phshp.click(function() {
        info_phshp.toggleClass('active');
        srpt.removeClass('active');
    });

    btn_eng.click(function() {
        info_eng.toggleClass('active');
        srpt.removeClass('active');
    });

    btn_learn.click(function() {
        info_learn.toggleClass('active');
        srpt.removeClass('active');
    });



    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
       
        if (!info_html.is(e.target) // проверка условия если клик был не по нашему блоку
            && info_html.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            info_html.removeClass("active"); // если условия выполняются - скрываем наш элемент
            srpt.addClass('active');
        }
        if (!info_css.is(e.target) // проверка условия если клик был не по нашему блоку
            && info_css.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            info_css.removeClass("active"); // если условия выполняются - скрываем наш элемент
            srpt.addClass('active');
        }
        if (!info_js.is(e.target) // проверка условия если клик был не по нашему блоку
            && info_js.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            info_js.removeClass("active"); // если условия выполняются - скрываем наш элемент
            srpt.addClass('active');
        }
        if (!info_jquery.is(e.target) // проверка условия если клик был не по нашему блоку
            && info_jquery.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            info_jquery.removeClass("active"); // если условия выполняются - скрываем наш элемент
            srpt.addClass('active');
        }
        if (!info_phshp.is(e.target) // проверка условия если клик был не по нашему блоку
            && info_phshp.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            info_phshp.removeClass("active"); // если условия выполняются - скрываем наш элемент
            srpt.addClass('active');
        }
        if (!info_eng.is(e.target) // проверка условия если клик был не по нашему блоку
            && info_eng.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            info_eng.removeClass("active"); // если условия выполняются - скрываем наш элемент
            srpt.addClass('active');
        }
        if (!info_learn.is(e.target) // проверка условия если клик был не по нашему блоку
            && info_learn.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            info_learn.removeClass("active"); // если условия выполняются - скрываем наш элемент
            srpt.addClass('active');
        }


    });



// accordion
    $("[data-collspace]").on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    $(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
        let btnAccord1 = $("#news-accordion__item1"); // определяем элемент, к которому будем применять условия 
        let btnAccord2 = $("#news-accordion__item2"); // определяем элемент, к которому будем применять условия 
        let btnAccord3 = $("#news-accordion__item3"); // определяем элемент, к которому будем применять условия 
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


});