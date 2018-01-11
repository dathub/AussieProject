$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['crew0', 'crew1', 'crew2'],
        menu: '#menu',
        scrollingSpeed: 1700
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
      } else if($(this).attr('href')=="#crew0") {
        window.location.href  = url[0] + "#crew0";
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