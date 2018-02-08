$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['0', '1','2','3'],
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
      if($(this).attr('href')=="#1") {
        window.location.href  = url[0] + "#1";
      } else if($(this).attr('href')=="#2") {
        window.location.href  = url[0] + "#2";
      } else if($(this).attr('href')=="#3") {
        window.location.href  = url[0] + "#3";
      }

    });
  });

  $(function() {
    $('#scroll-top-link > a[href*=#]').on('click', function(e) {
      e.preventDefault();
      var url               = window.location.href.split('#'); 
      window.location.href  = url[0] + "#0"; 
    });
  });