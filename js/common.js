$(document).ready(function(){
	
	// carousel
	$('#slider2 .slider').prrpleSlider({
		windowsize:				true,
		loop:					true,
	});
	$('#slider2 .slider').swipe({
		swipeLeft:function(){
			$('#slider2 .slider').prrpleSliderRight();
		},
		swipeRight:function(){
			$('#slider2 .slider').prrpleSliderLeft();
		},
		threshold:100,
		allowPageScroll:'vertical',
		excludedElements: ''
	});
	var resize;
	$(window).resize(function(){
		clearTimeout(resize);
		resize = setTimeout(function(){
			$('.slider').each(function(){
				$(this).prrpleSliderResize();
			});
		},1000);
	});
	
	//navigation
	$('.mx-active-nav > a').append('<span></span>');
	
	//search
	$('#mx-input-search').click(function(){
		var formDisplay = $('.mx-search > form').css('display');
		
		if(formDisplay == 'none'){
			$('.mx-search > form').css('display', 'block');
			$('.mx-search > form').animate({'opacity' : '1'}, 1000);
		}
		else{			
			$('.mx-search > form').animate({'opacity' : '0'}, 1000);
			function formDisplayNone() {
			  	$('.mx-search > form').css('display', 'none');
			}
				setTimeout(formDisplayNone, 1000);			
		}		
	});
	$('#mx-input-search-hide').click(function(){
		var formDisplayHide = $('.mx-search-hide > form').css('display');
		
		if(formDisplayHide == 'none'){
			$('.mx-search-hide > form').css('display', 'block');
			$('.mx-search-hide > form').animate({'opacity' : '1'}, 1000);
		}
		else{			
			$('.mx-search-hide > form').animate({'opacity' : '0'}, 1000);
			function formDisplayHideNone() {
			  	$('.mx-search-hide > form').css('display', 'none');
			}
				setTimeout(formDisplayHideNone, 1000);			
		}		
	});
	
	//show menu
	$('#mx-show-menu').click(function(){
		var MenuDisplayHide = $('.mx-nav-hide').css('display');
		
		if(MenuDisplayHide == 'none'){
			$('.mx-nav-hide').css('display', 'block');
			$('.mx-nav-hide').animate({'opacity' : '1'}, 1000);
		}
		else{			
			$('.mx-nav-hide').animate({'opacity' : '0'}, 1000);
			function MenuDisplayHideNone() {
			  	$('.mx-nav-hide').css('display', 'none');
			}
				setTimeout(MenuDisplayHideNone, 1000);			
		}		
	});
	
	//safari
	if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){					
	}
	
	
})

