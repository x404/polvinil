$(document).ready(function(){

	$('#homeslider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		appendArrows: false,
		dots: true,
		autoplay: false,
		autoplaySpeed: 5000
	});


	$('#reviews-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-white" aria-label="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-white" aria-label="Вперёд"></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: false,
		autoplaySpeed: 5000
	});


	$('#photo-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-gray" aria-label="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-gray" aria-label="Вперёд"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000
	})
	$('#video-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-gray" aria-label="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-gray" aria-label="Вперёд"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000
	})

$('#nav-video-tab').on('shown.bs.tab', function (e) {
	$('#video-carousel').slick('setPosition');
})


	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	
});
