$( document ).ready(function() {
    
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
		$( ".descriptions-box" ).hide();
		$( ".descriptions-crew" ).hide();
		$( ".description-crew-wrapper" ).hide();
		$( ".do-not-click-box" ).hide();
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".hamburger" ).hide();
			$( ".cross" ).show();
		});
    });
    
    $( ".cross" ).click(function() {
		$( ".menu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
			$( ".descriptions-box" ).show();
			$( ".description-crew-wrapper" ).show();
			$( ".descriptions-crew" ).show();
			$( ".do-not-click-box" ).show();
		});
    });
	
	$active = $('div.active'),
	$index = $('div.item').index($active);
	$text = "the creative content studio taking on mountains and making waves";
	$('.descriptions-box').find('p').html($text);
	
	$('#myCarousel').on('slid.bs.carousel', function () {
		$active = $('div.active'),
		$index = $('div.item').index($active);
		switch($index){
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
		$('.descriptions-box').find('p').html($text);
	});
});

$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['crew0', 'crew1', 'crew2'],
        menu: '#menu',
        scrollingSpeed: 1700
    });
});