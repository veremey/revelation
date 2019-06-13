'use strict';

import $ from "jquery";
import mask from 'jquery-mask-plugin';
import valid from 'jquery-validation';



$(document).ready(function () {
	$('.phone').slideUp();


		//add css to head
		// var linkElement = ("static/css/main.min.css" !== undefined) ? "<link href='static/css/main.min.css' rel='stylesheet'  type='text/css'>" : "<link href='static/css/main.css' rel='stylesheet'  type='text/css'>";
		var linkElement = "<link href='static/css/main.min.css' rel='stylesheet'  type='text/css'>" ;

		 $("head").append(linkElement);

	$(window).scroll(function(){
		headerColor();
	});

	$('.js-go-down').on('click touchstart', function() {
		var $getData = $(this).data('down');
		var $target = $('.' + $getData);

		$('html, body').animate({
			scrollTop: $target.offset().top
		}, 1600);
});





	headerColor();
	validate();

	$('.js-ppp').click(function(e){
		// e.preventDefault();
		//close all popup
		$('.ppp').removeClass('is-active');
		$('.ppp__content').removeClass('is-active');
		//open my popup
		var getClass = $(this).data('ppp');
		$('.ppp').addClass('is-active');
		$('#' + getClass).addClass('is-active');

		$('.page').addClass('ppp-opened');

	});

	$('.js-close').click(function(e){
		e.preventDefault();
		//close all popups
		closePpp();
	});

	// $(document).on('change','.check', function() {
	$(".check input").on('change', function () {
		var self = $(this);
		if(self.is(":checked")) {
			self.parents('form').find('.phone').slideDown();
		} else {
			$('.phone').slideUp();
		}
	});

	$('.tel').mask('+000000000000');
});

function headerColor() {
	var $of  =  $(window).scrollTop();

	if($of > 20) {
		$('.page').addClass('is-scrolled');
	} else {
		$('.page').removeClass('is-scrolled');
	}
}

function closePpp(){
	$('.ppp').removeClass('is-active');
	$('.ppp__content').removeClass('is-active');
	$('.page').removeClass('ppp-opened');
}

$(document).on('click', function(el){
	var childr = $('.ppp__shadow');

	if($(el.target).is(childr) == true ){
		closePpp();
	}
});


function validate() {
	$('.js-validate').each(function(){
		if ($(this).length > 0) {
			$(this).validate({
				errorClass: 'has-error',
				rules: {
					name: {
						minlength: 2,
						required: true
					},
					city: {
						minlength: 2
					},
					// password: {
					// 	minlength: 5
					// },
					// confirm_password: {
					// 	minlength: 5,
					// 	equalTo: '#password'
					// },
					email: {
						email: true,
						required: true
					},
					phone: {
						minlength: 17,
						required: true
					},
					// sallerTel: {
					// 	minlength: 17
					// },
					address: {
						minlength: 2
					},
					message: {
						minlength: 4
					},
					date: {
						minlength: 4
					},
					time: {
						minlength: 10
					},
					items: {
						minlength: 1
					},
					sallerName: {
						minlength: 2
					},
					sallerPost: {
						minlength: 2
					},
					square: {
						minlength: 1
					},
					garantUserComment:{
						minlength: 4
					},
					client: {
						required: true
					},
					agree: {
						required: true
					},
					obectYstanovki: {
						required: true
					},
					celZakypki: {
						required: true
					}
				},
				messages: {
					firstname: '* Вас так зовут?',
					lastname: '* У вас такая фамилия?',
					fathername: '* У вас такое отчество?',
					password: {
						required: '* Введите пароль',
						minlength: '* Минимум 5 символов'
					},
					confirm_password: {
						 required: '* Пароли не совпадают',
						 minlength: '* Минимум 5 символов',
						 equalTo: '* Пароли не совпадают'
					},
					email: 'Заполнено некорректно',
					address: '* Это Ваш адрес?',
					any: '* Заполните поле',
					time: 'Заполните поле',
					items: 'Заполните поле',
					company: '* Заполните поле',
					tel: {
						required: 'заполнено некорректно',
						minlength: 'заполнено некорректно'
					},
					name: {
						required: 'заполнено некорректно',
						minlength: 'Минимум 2 символa'
					},
					message: {
						required: '* Заполните поле',
						minlength: 'Заполните поле',
					},
					text_area: {
						required: '* Заполните поле',
						minlength: 'Заполните поле'
					}
				}
			});
		}
	});
}
