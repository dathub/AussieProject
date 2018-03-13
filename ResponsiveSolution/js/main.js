// Black Column height Setting
$(document).ready(function(){
    $('.side-bar').height($('.content-bar').height());
});

$(window).on('resize', function(){
    $('.side-bar').height($('.content-bar').height());
});


// Change Descriptions with Carousel Change
$(document).ready(function(){
    $active = $('div.active'),
	$index = $('div.item').index($active);
	$text = "the creative content studio taking on mountains and making waves";
	$('.descriptions-box').find('p').html($text);
	
	$('#myCarousel').on('slide.bs.carousel', function () {

		var carIndicator = parseInt(document.querySelector('ol.carousel-indicators > li.active').dataset.slideTo);
		carIndicator = (carIndicator + 1)%5;
		
		switch(carIndicator){
			case 0:
				$text = "the creative content studio taking on mountains and making waves";
				break;
			case 1:
				$text = "we are a creative content studio of artists, creators and makers";
				break;
			case 2:
				$text = "producing world rocking content that captures the herat and soul of your story";
				break;
			case 3:
				$text = "stopping at nothing to create your splash of colour in this world";
				break;
			case 4:
				$text = "and why?</br></br>because we eat intelliigence for breaky, passion for lunch, courage for dinner and our mums always taught us to share";
				break;
		}
		
		$('.descriptions-box').fadeOut(200, function() {
			$('.descriptions-box').hide(function() {
				$('.descriptions-box').find('p').html($text);
				$('.descriptions-box').fadeIn(1000);
			});
		});
	});
});