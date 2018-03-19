jQuery(document).ready(function(){
	$("#slide2").hide();
	$("#slide3").hide();
	$("#slide4").hide();
	$("#slide5").hide();
	$("#slide6").hide();
    $(".slide1-btn").click(function(){
		$("#slide1").hide();
		$("#slide2").show();
	});
	
	$(".slide2-btn").click(function(){
		//$(".descriptions-box > .wrapper-middle > p").html("good answer");
		transition("good answer");
		setTimeout(slide2transition, 2000);
	});
	
	$(".slide3-btn").click(function(){
		transition("watch yo mouth gurl <br/><br/> jk, jk");
		setTimeout(slide3transition, 2000);
	});
	
	$(".slide4-btn").click(function(){
		transition("yeah lad");
		setTimeout(slide4transition, 2000);
	});
	
	$(".slide5-btn").click(function(){
		transition("yo-ready");
		setTimeout(slide5transition, 2000);
	});
	
	$(".wrong").click(function(){
		$(".descriptions-box > .wrapper-middle > p").html("try again...");
	});
	
	$(".wrong-slide5").click(function(){
		$(".descriptions-box > .wrapper-middle > p").html("hello, its me, guess again");
	});
	
	function slide2transition() {
		$("#slide2").hide();
		$("#slide3").show();
		$(".descriptions-box > .wrapper-middle > p").html("");
	}
	
	function slide3transition() {
		$("#slide3").hide();
		$("#slide4").show();
		$(".descriptions-box > .wrapper-middle > p").html("");
	}
	
	function slide4transition() {
		$("#slide4").hide();
		$("#slide5").show();
		$(".descriptions-box > .wrapper-middle > p").html("");
	}
	
	function slide5transition() {
		$("#slide5").hide();
		$("#slide6").show();
		$(".descriptions-box > .wrapper-middle > p").html("");
	}

	function transition($text){
		var $element = $(".descriptions-box > .wrapper-middle > p");
		$element.hide();
		$element.html($text);
		$element.fadeIn(1000);
		$element.fadeOut(1000);
	}


});