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
		},500);
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
	
	//parallax
	$.stellar({
		responsive: true
	});
	
	//popup
	$(".mx-ready-projects-hover-button").magnificPopup({
		delegate: "a",
		type: "image",
		gallery:{enabled:false}
	});
	
	//show menu poject
	$('#mx-show-menu-project').click(function(){
		var MenuProjectHide = $('.mx-hide-menu-project > ul').css('display');
		
		if(MenuProjectHide == 'none'){
			$('.mx-hide-menu-project > ul').css('display', 'block');
			$('.mx-hide-menu-project > ul').animate({'opacity' : '1'}, 1000);
		}
		else{			
			$('.mx-hide-menu-project > ul').animate({'opacity' : '0'}, 1000);
			function MenuProjectHideNone() {
			  	$('.mx-hide-menu-project > ul').css('display', 'none');
			}
				setTimeout(MenuProjectHideNone, 1000);			
		}		
	});
	
	//flexisel Carousel
	$("#flexisel").flexisel({
		visibleItems: 5,
      	enableResponsiveBreakpoints: true,
     		responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 3
            }
        }
    });
    
    //review
    	//owl carousel
	$(".owl-carousel").owlCarousel({  	
		loop : true,
		autoplay : true,
		autoplayTimeout : 10000,
		items : 1,
		smartSpeed : 1000,
		center : true,
		autoplaySpeed : 2000,
		mouseDrag : false,
		nav : true,
		navText : '',
		dots : true
	});
})

