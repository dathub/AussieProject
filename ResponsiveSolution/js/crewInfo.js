$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['member1', 'member2', 'member3', 'member4', 'member5'],
        scrollingSpeed: 1700
    });
});

$(function() {
    $('#scroll-down-link > a[href*=#]').on('click', function(e) {
        e.preventDefault();
        var url               = window.location.href.split('#'); 
        if($(this).attr('href')=="#member2") {
            window.location.href  = url[0] + "#member2";
        } else if($(this).attr('href')=="#member3") {
            window.location.href  = url[0] + "#member3";
        }
    });
});

// $(function() {
//     $('#scroll-top-link > a[href*=#]').on('click', function(e) {
//         e.preventDefault();
//         var url               = window.location.href.split('#'); 
//         window.location.href  = url[0] + "#member1"; 
//     });
// });

$(window).on('hashchange', function(e){
    hideMemberDescriptions();
});

function hideMemberDescriptions(){
    var url = window.location.href.split('#'); 
    if(url[1] == "member1") {
        $(".section > .descriptions-crew").hide();
        $("#section1 > .descriptions-crew").fadeIn();
    } else if(url[1] == "member2") {

    }  else if(url[1] == "member3") {

    } else if(url[1] == "member4") {

    } else {

    }
}
