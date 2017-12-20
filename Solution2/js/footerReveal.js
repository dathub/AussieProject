$(function(){
  $(window).scroll(function() {
    var height = $(document).height() - ($(document).scrollTop() + $(window).height());
    if((height <= 250))
    {    
      var footerHeight = 250 - height;
      var risePercentage = ((footerHeight)/$(document).height())*100;
      var contentPageTop = footerHeight + "px";
      // $("div#footer > div.row").css({bottom: contentPageTop})
      $("div#footer").height(footerHeight);
      $("div#footer > div.row").height(footerHeight);
      $('.side-bar').height($('.content-bar').height());
      // $("div.content-page").css({top: contentPageTop});
      // $("div.content-page > div.row > div.right-col").css({opacity: 0});
      // $("section#section01").css({position: 'fixed'});
      // $('#footer').addClass("show");
    }
    else
    {
      $('.side-bar').height($('.content-bar').height());
      $("div#footer").height(0);
      $("div#footer > div.row").height(0);
      // $("div.content-page > div.row >  div.right-col").css({opacity: 1});
      // $('#footer').removeClass("show");
    }
  });
})


