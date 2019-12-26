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


});