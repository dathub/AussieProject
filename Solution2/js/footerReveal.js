$(function(){
  $(window).scroll(function() {
    var height = $(document).height() - ($(document).scrollTop() + $(window).height());
    if((height <= 200))
    {    
      $('#footer').addClass("show");
    }
    else
    {
      $('#footer').removeClass("show");
    }
  });
})