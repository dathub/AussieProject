jQuery(document).ready(function(){
    $(".slide1-btn").click(function(){
		$("#slide1").hide();
		$(".descriptions-box > .wrapper-middle > p").html("good answer");
	});
	
	$(".slide2-btn").click(function(){
		$("#slide2").hide();
		$(".descriptions-box > .wrapper-middle > p").html("watch yo mouth gurl <br/><br/> jk, jk");
	});
	
	$(".slide3-btn").click(function(){
		$("#slide3").hide();
		$(".descriptions-box > .wrapper-middle > p").html("yeah lad");
	});
	
	$(".slide4-btn").click(function(){
		$("#slide4").hide();
		$(".descriptions-box > .wrapper-middle > p").html("hello, its me, guess again");
	});
	
	$(".slide5-btn").click(function(){
		$("#slide5").hide();
		$(".descriptions-box > .wrapper-middle > p").html("yo-ready");
	});
});