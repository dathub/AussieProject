$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section0', 'section1'],
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
      if($(this).attr('href')=="#section1") {
        window.location.href  = url[0] + "#section1";
      } else if($(this).attr('href')=="#section2") {
        window.location.href  = url[0] + "#section2";
      }
    });
  });

  $(function() {
    $('#scroll-top-link > a[href*=#]').on('click', function(e) {
      e.preventDefault();
      var url               = window.location.href.split('#'); 
      window.location.href  = url[0] + "#section0"; 
    });
  });