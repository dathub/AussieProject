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
		$(".descriptions-box > .wrapper-middle > p").html("good answer");
		setTimeout(slide2transition, 3000);
	});
	
	$(".slide3-btn").click(function(){
		$(".descriptions-box > .wrapper-middle > p").html("watch yo mouth gurl <br/><br/> jk, jk");
		setTimeout(slide3transition, 3000);
	});
	
	$(".slide4-btn").click(function(){
		$(".descriptions-box > .wrapper-middle > p").html("yeah lad");
		setTimeout(slide4transition, 3000);
	});
	
	$(".slide5-btn").click(function(){
		setTimeout(slide5transition, 3000);
		$(".descriptions-box > .wrapper-middle > p").html("yo-ready");
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
});