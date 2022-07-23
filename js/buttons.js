$('.button-group > div').click(function () {
	$('.button-group > div.active').not(this).removeClass('active');
	$(this).toggleClass('active');
});
