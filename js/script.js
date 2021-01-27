$(document).ready(function() {
	// Убираем placeholder при клике в поле
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	// $(window).on('load scroll resize', function(){
	// 	var main_slider_items = $('.main_slider .item').length;
	// 	//alert(main_slider_items);
	// 	//document.getElementById("main_slider_items").innerHTML = main_slider_items;
	// 	$(".main_slide_quantity").html('0' + main_slider_items);
	// });

	// добавляем класс в шапку при скролле
	$(window).on('load scroll resize', function(){
		//var height = $(window).height() - 100;
		if($(this).scrollTop() > 20) {
			$('#header').addClass('scroll');
		} else {
			$('#header').removeClass('scroll');
		} 
	});

	// добавляем класс в пункты с подменю
	$('ul.menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});

	$('.menu_button').on('click', function(e){
		if( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			$(".main_menu").css('right', '0%');
		}else{
			$(this).removeClass('active');
			$(".main_menu").css('right', '-100%'); 
			$(".menu .submenu ul").slideUp(500);
			$(".menu .submenu ul").removeClass('show');  
		}
	});
	
	if ( /*window.innerWidth > 600 &*/ window.innerWidth < 1030 ) {
		$('.menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
				$(this).parent().addClass('show');  
				$(this).parent().children('ul').slideDown(500);
				e.preventDefault();
		    }
		    else{
				$(this).parent().removeClass('show');  
				$(this).parent().children('ul').slideUp(500);
				e.preventDefault();
		    }
		});
	};
	
	// animation
	if ( window.innerWidth>0 ){
		$('#header').toggleClass("hidden");
		$('.main_section').toggleClass("hidden");
		$('#header').addClass('animated');
		$('#main_screen').addClass('animated');
	};
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});

	$("[data-fancybox]").fancybox();



	$('#main_screen .main_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
		//infinite: false,
	    asNavFor: '#main_screen .counter_slider',
	  });
	$('#main_screen .counter_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '#main_screen .main_slider',
		dots: true,
		fade: true,
		focusOnSelect: true,
		//infinite: false,
		autoplay: true,
	});

	$('.partners_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
	    centerMode: true,
		//vertical: true,
		//focusOnSelect: true,
		//initialSlide: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 650,
				settings: {
					  slidesToShow: 2,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.directions_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
	    //centerMode: true,
		//vertical: true,
		//focusOnSelect: true,
		//initialSlide: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 800,
				settings: {
					  slidesToShow: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.steps .numbers_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
		//infinite: false,
		fade: true,
	    asNavFor: '.steps .description_slider',
	  });
	$('.steps .description_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.steps .numbers_slider',
		//dots: true,
		fade: true,
		//focusOnSelect: true,
		//infinite: false,
		//autoplay: true,
	});

	$('.project_page .main_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    //fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.project_page .preview_slider',
	  });
	$('.project_page .preview_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.project_page .main_slider',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		]
	});

	$('.top_gallery .images_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
		infinite: false,
	    asNavFor: '.top_gallery .counter_slider',
	  });
	$('.top_gallery .counter_slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.top_gallery .images_slider',
		dots: true,
		fade: true,
		focusOnSelect: true,
		infinite: false,
		//autoplay: true,
	});

	$('.gallery_slider').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
		arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	    dots: false,
	    //centerMode: true,
		//vertical: true,
		focusOnSelect: true,
		responsive: [
			
			{
				breakpoint: 800,
				settings: {
				  	slidesToShow: 2,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

		// Modal Window
		$('.form__btn-close').click(function (e) {
			modalClose();
			e.preventDefault();
		});
		
		$(document).on('keydown', function (evt) {
			if (evt.keyCode == 27) {
				evt.preventDefault();
				modalClose();
			}
		});
		
		// $(document).on("click", ".gUniFormModalWindowContainer, .gUniFormModalWindowExit, .gUniFormOpen, .gUniFormSuccessContainer, .gUniFormExit", function(event) {
		// 	return event.stopImmediatePropagation();
		// });
		
		// $(document).on("click", function (e) {    
		// 	modalClose();
		// });
		
		$('.overlay').on("click", function (e) {    
			modalClose();
		});
	
		modalOpen($('.btn-write'), $('.form-write'));
		modalOpen($('.btn-order_project'), $('.form-order_project'));
		//modalOpen($('.btn-question'), $('.form-question'));
		//modalOpen($('.btn-price'), $('.form-price'));
		//modalOpen($('.btn-in_basket'), $('.form-in_basket'));
	
		function modalOpen(btn, form) {
			btn.on('click', function (e) {
				form.show();
				e.preventDefault();
			});
		};
	
		function modalClose() {
			$('.form--modal').hide();
			if ($('.form-basket_order').find('p.form-note').length > 0) {
			  window.location.reload();
			}
		};
		
		$(document).ajaxSuccess(function(e) {
			$('.form__btn-close').click(function (e) {
				modalClose();
				e.preventDefault();
			});			
			
			$(document).on('keydown', function (evt) {
				if (evt.keyCode == 27) {
					evt.preventDefault();
					modalClose();
				}
			});			
			modalOpen($('.btn-basket_order'), $('.form-basket_order'));			
		});
		// end Modal Window

});

