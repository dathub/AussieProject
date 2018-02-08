jQuery(document).ready(function(){
	$("#slide2").hide();
	$("#slide3").hide();
	$("#slide4").hide();
	$("#slide5").hide();
	$("#slide6").hide();
    $(".slide1-btn").click(function(){
		$("#slide1").hide();
		$("#slide2").show();
		$(".descriptions-box > .wrapper-middle > p").html("good answer");
	});
	
	$(".slide2-btn").click(function(){
		$("#slide2").hide();
		$("#slide3").show();
		$(".descriptions-box > .wrapper-middle > p").html("watch yo mouth gurl <br/><br/> jk, jk");
	});
	
	$(".slide3-btn").click(function(){
		$("#slide3").hide();
		$("#slide4").show();
		$(".descriptions-box > .wrapper-middle > p").html("yeah lad");
	});
	
	$(".slide4-btn").click(function(){
		$("#slide4").hide();
		$("#slide5").show();
		$(".descriptions-box > .wrapper-middle > p").html("hello, its me, guess again");
	});
	
	$(".slide5-btn").click(function(){
		$("#slide5").hide();
		$("#slide6").show();
		$(".descriptions-box > .wrapper-middle > p").html("yo-ready");
	});
});