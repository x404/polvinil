var thankcallback = '<div class="thank text-center"><p>В ближайщее время с вами свяжутся наши менеджеры для уточнения всех деталей</p></div>';
var thankfaq = '<div class="thank text-center"><p>Ваш вопрос отправлен</p></div>';
var thankreview = '<div class="thank text-center"><p>Ваш отзыв отправлен</p></div>';
var errorTxt = 'Форма не отправлена. Попробуйте позже.';

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
		autoplaySpeed: 5000,
		responsive: [
			{
			  breakpoint: 550,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '10px'
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '50px'
			  }
			},
			{
			  breakpoint: 420,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '40px'
			  }
			},
			{
			  breakpoint: 400,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '25px'
			  }
			},
			{
			  breakpoint: 385,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '10px'
			  }
			}
		]
	});


	// info tabs
	$('#photo-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-gray" aria-label="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-gray" aria-label="Вперёд"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		responsive: [
			{
			  breakpoint: 1300,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '140px'
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '50px'
			  }
			},
			{
			  breakpoint: 550,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '45px'
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '35px'
			  }
			},
			{
			  breakpoint: 420,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '25px'
			  }
			},
			{
			  breakpoint: 300,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '10px'
			  }
			}
	    ]
	});
	$('#video-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-gray" aria-label="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-gray" aria-label="Вперёд"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		responsive: [
			{
			  breakpoint: 1300,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '140px'
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '50px'
			  }
			},
			{
			  breakpoint: 550,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '45px'
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '35px'
			  }
			},
			{
			  breakpoint: 420,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '25px'
			  }
			},
			{
			  breakpoint: 300,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '10px'
			  }
			}
	    ]
	});
	$('#articles-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-gray" aria-label="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-gray" aria-label="Вперёд"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
		responsive: [
			{
			  breakpoint: 1300,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '140px'
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '50px'
			  }
			},
			{
			  breakpoint: 550,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '45px'
			  }
			},
			{
			  breakpoint: 500,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '35px'
			  }
			},
			{
			  breakpoint: 440,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '20px'
			  }
			},
			{
			  breakpoint: 300,
			  settings: {
			  	arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
		        centerMode: true,
		        centerPadding: '10px'
			  }
			}
	    ]
	})

	$('#nav-video-tab').on('shown.bs.tab', function (e) {
		$('#video-carousel').slick('setPosition');
	});
	$('#nav-articles-tab').on('shown.bs.tab', function (e) {
		$('#articles-carousel').slick('setPosition');
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



	// VALIDATE
	// validate
	$.validator.addMethod("validphone", function(value){
		if (Inputmask.isValid(value, { mask: '+7 ( 999 ) 999 - 99 - 99'})) return true
		else return false;
	},"");

	// validation forms
	$('#callback-form').validate({
        rules : {
            tel:{validphone:true}
        },
		submitHandler: function(form){
			let strSubmit= $(form).serialize(),
				url = $(form).attr('action');

				sendform(url, strSubmit, form);

			// $.ajax({
			// 	type: "POST",
			// 	url: $(form).attr('action'),
			// 	data: strSubmit,
			// 	success: function(){
			// 		document.querySelector('.sending').remove();
			// 		$(form).append(thankcallback);
			// 		// startClock($(form).attr('id'));
			// 		startClock($(form));
			// 	},s
			// 	error: function(){
			// 		alert(errorTxt);
			// 		$(form).find('fieldset').show();
			// 		$('.sending').remove();
			// 	}
			// })
			// .fail(function(error){
			// 	alert(errorTxt);
			// });
			
		}
	});

	$('#examples-form').validate({
        rules : {
            tel:{validphone:true}           
        },
		submitHandler: function(form){
			var strSubmit=$(form).serialize();  
			$(form).find('fieldset').hide();
			$(form).append('<div class="sending">Идет отправка ...</div>');

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
				data: strSubmit,
				success: function(){
					document.querySelector('.sending').remove();
					$(form).append(thankcallback);
					// startClock($(form).attr('id'));
					startClock($(form));
				},
				error: function(){
					alert(errorTxt);
					$(form).find('fieldset').show();
					$('.sending').remove();
				}
			})
			.fail(function(error){
				alert(errorTxt);
			});
		}
	});

	$('#detail-form').validate({
		submitHandler: function(form){
			var strSubmit=$(form).serialize();  
			$(form).find('fieldset').hide();
			$(form).append('<div class="sending">Идет отправка ...</div>');

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
				data: strSubmit,
				success: function(){
					document.querySelector('.sending').remove();
					$(form).append(thankcallback);
					startClock($(form));
				},
				error: function(){
					alert(errorTxt);
					$(form).find('fieldset').show();
					$('.sending').remove();
				}
			})
			.fail(function(error){
				alert(errorTxt);
			});
		}
	});

	$('#costfloor-form').validate({
		submitHandler: function(form){
			var strSubmit=$(form).serialize();  
			$(form).find('fieldset').hide();
			$(form).append('<div class="sending">Идет отправка ...</div>');

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
				data: strSubmit,
				success: function(){
					document.querySelector('.sending').remove();
					$(form).append(thankcallback);
					startClock($(form));
				},
				error: function(){
					alert(errorTxt);
					$(form).find('fieldset').show();
					$('.sending').remove();
				}
			})
			.fail(function(error){
				alert(errorTxt);
			});
		}
	});

	$('#start-form').validate({
		submitHandler: function(form){
			var strSubmit=$(form).serialize();  
			$(form).find('fieldset').hide();
			$(form).append('<div class="sending">Идет отправка ...</div>');

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
				data: strSubmit,
				success: function(){
					document.querySelector('.sending').remove();
					$(form).append(thankcallback);
					startClock($(form));
				},
				error: function(){
					alert(errorTxt);
					$(form).find('fieldset').show();
					$('.sending').remove();
				}
			})
			.fail(function(error){
				alert(errorTxt);
			});
		}
	});

	$('#iwant-form').validate({
		submitHandler: function(form){
			var strSubmit=$(form).serialize();  
			$(form).find('fieldset').hide();
			$(form).append('<div class="sending">Идет отправка ...</div>');

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
				data: strSubmit,
				success: function(){
					document.querySelector('.sending').remove();
					$(form).append(thankcallback);
					startClock($(form));
				},
				error: function(){
					alert(errorTxt);
					$(form).find('fieldset').show();
					$('.sending').remove();
				}
			})
			.fail(function(error){
				alert(errorTxt);
			});
		}
	});

	$('#invite-form').validate({
        rules : {
            tel:{validphone:true}
        },
		submitHandler: function(form){
			var strSubmit=$(form).serialize();  
			$(form).find('fieldset').hide();
			$(form).append('<div class="sending">Идет отправка ...</div>');

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
				data: strSubmit,
				success: function(){
					document.querySelector('.sending').remove();
					$(form).append(thankcallback);
					// startClock($(form).attr('id'));
					startClock($(form));
				},
				error: function(){
					alert(errorTxt);
					$(form).find('fieldset').show();
					$('.sending').remove();
				}
			})
			.fail(function(error){
				alert(errorTxt);
			});
		}
	});


	$('#advantage').on('show.bs.modal', function (e) {
		let $this = $(e.relatedTarget),
			title = $this.data('title'),
			url = $this.attr('href');

		posting = $.post(url);
		posting.done(function(data) {
			document.querySelector('#advantage-title').innerText = title;
			document.querySelector('#advantage-text').innerHTML = data;
		});
	});


	// animated
		$('.fadeIn, .cifr').css("opacity", "0");

		var mobile = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android)/);

		if(mobile != null) {
			// $('html').css('width', window.innerWidth + 'px');
		} else {
			$(".scroll").each(function () {
				var block = $(this);
				$(window).scroll(function() {
					var top = block.offset().top;
					var bottom = block.height()+top;
					top = top - $(window).height();
					var scroll_top = $(this).scrollTop();
					if ((scroll_top > top) && (scroll_top < bottom)) {
						if (!block.hasClass("animated")) {
							block.addClass("animated");
							block.trigger('animateIn');
						}
					}
				});
			});
		};

		/* Time Parser */
		$(".cifr i").each(function() {
		  $(this).attr("data-number", parseInt($(this).text()));
		});

		$(".about__wrapper").on("animateIn", function() {
		  var inter = 1;
		  $(this).find(".cifr i").each(function() {
			var count = parseInt($(this).attr("data-number")),
				block = $(this),
				timeout = null,
				step = 1;
			timeout = setInterval(function() {
			  if (step == 25) {
				block.text(count.toString());
				clearInterval(timeout);
			  } else {
				block.text((Math.floor(count*step/25)).toString());
				step++;
			  }
			}, 60);
		  });
		}).on('animateOut', function() {
		  $(this).find('.anim').each(function() {
			$(this).css('opacity', 0.01);
			$(this).css({'-webkit-transform': 'scale(0.7, 0.7)', '-moz-transform': 'scale(0.7, 0.7)'});
		  });
		});
});


$(function() {  
	$('#advantage-text').scrollbar()
});




$(function(){
	$('.policy input').click(function(){
		var $this = $(this),
			$submit = $this.closest('.form-policy');

		if ($this.is(':checked')){
			$submit.find('.input, .form-control, .submit, textarea, input[type=radio]').removeAttr('disabled');
		} else {
			$submit.addClass('disabled');
			$submit.find('.input, .form-control, .submit, textarea, input[type=radio]').attr('disabled', true);
		}
	})
});

$(function(){
	// mask
	$('input.tel').inputmask({
	        mask: '+7 ( 999 ) 999 - 99 - 99',
	        showMaskOnHover : false
	});
	// #mask
});





var timer,
	sec = 3;


function showTime(sendform){
	sec = sec-1;
	if (sec <=0) {
		stopClock();

		modal = $('#' + sendform).closest('.modal');
		modal.modal('hide');
		setTimeout(function(){
			modal.find('.thank').remove();
			modal.find('.form-control, textarea').val('');
			modal.find('fieldset').show();
		}, 1000)


		switch (sendform){
			// case 'qorder-form':
			// 	$('.qorder__box .thank').fadeOut('normal',function(){
			// 		$('.qorder__box .thank').remove();
			// 		$('.qorder__box .form-control, .qorder__box textarea').val('');
			// 	});
			// 	break;
			// case 'general-form':
			// 	$('#callback .thank').fadeOut('normal',function(){
			// 		$('#callback .thank').remove();
			// 		$('#callback .form-control, #callback textarea').val('');
			// 		$('#callback fieldset').show();
			// 	});
			// 	break;
			// case 'cart-form':
			// 	$('.cart .thank').fadeOut('normal',function(){
			// 		$('.cart .thank').remove();
			// 		// $('.cart .form-control, .cart textarea').val('');
			// 		// $('.cart__form fieldset').show();
			// 	});
			// 	break;	
			default:

				break;
		}
	}
}

function stopClock(){
	window.clearInterval(timer);
	timer = null;
	sec = 3;
}

function startClock(sendform){
	if (!timer)
		timer = window.setInterval("showTime('" + sendform.attr('id') + "')",1000);
}




// показываем второй  уровень меню
$(document).on('click', '.o-menu .folder > a, .o-menu .folder > span', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.next('.subnav').slideToggle('normal', function(){
		$this.toggleClass('open')
	});
})


function sendform(url, strSubmit, form){
	$(form).find('fieldset').hide();
	$(form).append('<div class="sending">Идет отправка ...</div>');
	fetch(url, {
		method: 'post',
		headers: {
	        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body: strSubmit 
	})
	.then(function(response){ 
		if (response.status == '200'){
			document.querySelector('.sending').remove();
			$(form).append(thankcallback);
			startClock($(form));
		} else{
			alert(errorTxt);
			$(form).find('fieldset').show();
			$('.sending').remove();	
		}
	})
	.catch (function (error) {
	    console.log('Request failed', error);
	});
}