$(function(){
    var $window = $(window);		//Window object
    var $scrollDownButton = $(".scroll-down-a").filter("[href^=\\#]");
	
	var scrollTime = 1;			//Scroll time
	var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Circ.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
		});			
	});
	
});

// $(function(){

// 	var topSection0 = $("#section0").offset().top;
// 	var topSection1 = $("#section1").offset().top;
// 	var topSpaceOccupier = $(".space-occupier").offset().top;
// 	var lastScrollTop = 0;
// console.log("topSection0: "+ topSection0);
// console.log("topSection1: "+ topSection1);
// console.log("topSpaceOccupier: "+ topSpaceOccupier);

// 	$(window).scroll(function(event){
// 	   var st = $(this).scrollTop();
// 	   if (st > lastScrollTop){
// 		   // downscroll code
// 		   if (st < topSection1) {
// 				//Move to section1
// 			TweenMax.to($(window), 2.0, {
// 				scrollTo:{
// 					y: topSection1, 
// 					autoKill: true
// 				}, 
// 				ease: Circ.easeOut 
// 			 });
// 		   } else if (st > topSpaceOccupier) {
// 				event.preventDefault();								
// 				var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
// 				var scrollTop = $(window).scrollTop();
// 				var finalScroll = scrollTop - parseInt(delta*scrollDistance);
					
// 				TweenMax.to($(window), 2.0, {
// 					scrollTo : { y: finalScroll, autoKill:true },
// 						ease: Circ.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
// 						autoKill: true,
// 						overwrite: 5							
// 				});	
// 		   }
// 		   console.log("Down Scroll");
// 	   } else {
// 		  // upscroll code
// 		  console.log("Up Scroll");
// 	   }
// 	   lastScrollTop = st;
// 	});
// });


$(function(){  	
	var wrapper = $("#wrapper"),
		$menu = $("#menu"),
		$window = $(window);
	
		$(".scroll-down-a").on("click", function(){
		var $this = $(this),
			href = $this.attr("href"),
			topY = $(href).offset().top;
	   
		TweenMax.to($window, 2.0, {
			scrollTo:{
				y: topY, 
				autoKill: true
			}, 
			ease: Circ.easeOut 
		 });
	  
	  return false;
	});   
});