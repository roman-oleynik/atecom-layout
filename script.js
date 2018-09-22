$('document').ready(function() {
	let sliderPoint = 0;
	let headerSliderPoint = 0;
	$('.clients-container-slider__right-arrow').on('click', function() {
		sliderPoint-=200;
		
		if(sliderPoint< -200) {
			sliderPoint = 0;
		}
		$('.clients-container-slider-window').css('left', sliderPoint);
	});
	$('.clients-container-slider__left-arrow').on('click', function() {
		sliderPoint+=200;
		
		if(sliderPoint> 0) {
			sliderPoint = -200;
		}
		$('.clients-container-slider-window').css('left', sliderPoint);
	});
	
	
	$('.right-arrow').on('click', function() {
		let sliderWindow = document.getElementsByClassName("title-section-slider-window")[0];
		headerSliderPoint-=100;
		
		console.log(3);
		if(headerSliderPoint< -200) {
			headerSliderPoint = 0;
		}
		sliderWindow.style.left = headerSliderPoint + "%";
	});
	$('.left-arrow').on('click', function() {
		let sliderWindow = document.getElementsByClassName("title-section-slider-window")[0];
		headerSliderPoint+=100;
		
		console.log(3);
		if(headerSliderPoint> 0) {
			headerSliderPoint = -200;
		}
		sliderWindow.style.left = headerSliderPoint + "%";
	});
	
});