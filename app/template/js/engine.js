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
	});
	$('#video-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-gray" aria-label="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-gray" aria-label="Вперёд"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000
	});
	$('#articles-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev slick-arrow slick-arrow-gray" aria-label="Назад"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow slick-arrow-gray" aria-label="Вперёд"></button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000
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


	var thankcallback = '<div class="thank text-center"><p>В ближайщее время с вами свяжутся наши менеджеры для уточнения всех деталей</p></div>';
	var thankfaq = '<div class="thank text-center"><p>Ваш вопрос отправлен</p></div>';
	var thankreview = '<div class="thank text-center"><p>Ваш отзыв отправлен</p></div>';
	var errorTxt = 'Форма не отправлена. Попробуйте позже.';
	// validation forms
	$('#callback-form').validate({
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
