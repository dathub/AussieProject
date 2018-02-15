$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['crew0', 'crew1'],
        menu: '#menu',
		scrollingSpeed: 1200,
        responsiveWidth: 900,
        afterResponsive: function(isResponsive){
            
        }
    });
});

$(function() {
    $('#scroll-down-link > a[href*=#]').on('click', function(e) {
      e.preventDefault();
      var url               = window.location.href.split('#'); 
      if($(this).attr('href')=="#crew1") {
        window.location.href  = url[0] + "#crew1";
      } else if($(this).attr('href')=="#crew2") {
        window.location.href  = url[0] + "#crew2";
      }
    });
  });

  $(function() {
    $('#scroll-top-link > a[href*=#]').on('click', function(e) {
      e.preventDefault();
      var url               = window.location.href.split('#'); 
      window.location.href  = url[0] + "#crew0"; 
    });
  });