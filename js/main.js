$(function () {
	$('.header-slider').slick({
		dots: true,
		vertical: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="./images/svg/arrowUp.svg" alt="arrow up"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="./images/svg/arrowDown.svg" alt="arrow down"></button>',
	});

	$('.product__name').slick({
		slidesToShow: 4.5,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.product__content',
		vertical: true,
		centerMode: true,
		prevArrow:
			'<button type="button" class="product-prev"><img src="./images/svg/arrowUpNavy.svg" alt="arrow up"></button>',
		nextArrow:
			'<button type="button" class="product-next"><img src="./images/svg/arrowDownNavy.svg" alt="arrow down"></button>',
	});

	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__name',
		fade: true,
		arrows: false,
	});
});
