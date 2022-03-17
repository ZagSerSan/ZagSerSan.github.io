$(function () {

	let header_burger = $("#header-burger");
	let header_burger_icon = $("#header-burger-icon");

	header_burger_icon.on('click', function (event) {
		event.preventDefault();

		$(header_burger).toggleClass('active');

	});


});