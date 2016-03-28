$(document).ready(function(){	

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



