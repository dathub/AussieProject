$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['project0', 'project1', 'project2'],
        menu: '#menu',
        scrollingSpeed: 1700
    });
});

$(function() {
    $('#scroll-down-link > a[href*=#]').on('click', function(e) {
      e.preventDefault();
      var url               = window.location.href.split('#'); 
      if($(this).attr('href')=="#project1") {
        window.location.href  = url[0] + "#project1";
      } else if($(this).attr('href')=="#project2") {
        window.location.href  = url[0] + "#project2";
      }
    });
  });

  $(function() {
    $('#scroll-top-link > a[href*=#]').on('click', function(e) {
      e.preventDefault();
      var url               = window.location.href.split('#'); 
      window.location.href  = url[0] + "#project0"; 
    });
  });