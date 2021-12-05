$(function () {
	$('.header-slider').slick({
		dots: true,
		vertical: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="./images/svg/arrowUp.svg" alt="arrow up"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="./images/svg/arrowDown.svg" alt="arrow down"></button>',
		responsive: [
			{
				breakpoint: 361,
				settings: {
					dots: false,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 4000,
				},
			},
		],
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
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					arrows: false,
					vertical: false,
					slidesToShow: 3,
					dots: true,
				},
				breakpoint: 767,
				settings: {
					arrows: false,
					vertical: false,
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	});

	$('.product__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.product__name',
		fade: true,
		arrows: false,
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});
});
