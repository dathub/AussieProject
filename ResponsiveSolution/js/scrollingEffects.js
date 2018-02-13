// Pin Content - ScrollMagic
var controller = null;
var scene = null;

function initScrollMagic() {
    $('body').scrollTop( 0 );
    controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });
    scene = new ScrollMagic.Scene({
        triggerElement:"#pin"
    })
    .setPin("#pin")
    .addTo(controller);
}



jQuery( document ).ready(function() {
    var win = $(this); //this = window
    if (win.width() > 767) { 
        initScrollMagic();
    }
});


$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() <= 767) { 
        if( controller !== null || controller !== undefined ) {
            controller = controller.destroy( true );
            scene.destroy(true);
        }
    } else {
            initScrollMagic();
    }
});

// ------------------------------------------------------------------------------------------------------------------------------
// GSPA scrolling effect
$(function(){
    var $window = $(window);		//Window object
    var $scrollDownButton = $(".scroll-down-a").filter("[href^=\\#]");
	
	var scrollTime = 1.2;			//Scroll time
	var scrollDistance = 100;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Circ.easeOut,	
				autoKill: true,
				overwrite: 5							
		});			
	});
	
});



$(function(){  	
	var wrapper = $("#wrapper"),
		$menu = $("#menu"),
		$window = $(window);
	
		$(".scroll-down-a").on("click", function(){
		var $this = $(this),
			href = $this.attr("href"),
			topY = $(href).offset().top;
	   
		TweenMax.to($window, 1.2, {
			scrollTo:{
				y: topY, 
				autoKill: true
			}, 
			ease: Circ.easeOut 
		 });
	  
	  return false;
	});   
});




