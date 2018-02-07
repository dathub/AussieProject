$( document ).ready(function() {
    
    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
		$( ".descriptions-box" ).hide();
		$( ".description-box-wrapper" ).hide();
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
			$( ".description-box-wrapper" ).show();
			$( ".description-crew-wrapper" ).show();
			$( ".descriptions-crew" ).show();
			$( ".do-not-click-box" ).show();
		});
    });
});