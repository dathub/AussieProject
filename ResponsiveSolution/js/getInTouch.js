$('#btn1').on('click',function(){
    $('#section0').fadeOut(700);
	$('#section0').hide();
    $('#section1').fadeIn(1500);
});

$('#btn2').on('click',function(){
    $('#section1').fadeOut(700);
	$('#section1').hide();
    $('#section2').fadeIn(1500);
});

$('#btn3').on('click',function(){
    $('#section2').fadeOut(700);
	$('#section2').hide();
    $('#section3').fadeIn(1500);
});

jQuery(document).ready(function(){
	$('#section1').hide();
	$('#section2').hide();
	$('#section3').hide();
});