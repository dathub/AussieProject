// Black Column height Setting
$(document).ready(function(){
    $('.side-bar').height($('.content-bar').height());
});

$(window).on('resize', function(){
    $('.side-bar').height($('.content-bar').height());
});

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
var btnIcon = document.getElementById("btnIcon");

function myFunction() {
    if (video.paused) {
        video.play();
		btnIcon.classList.remove("fa-play");
		btnIcon.classList.add("fa-pause");
    } else {
        video.pause();
		btnIcon.classList.remove("fa-pause");
		btnIcon.classList.add("fa-play");
    }
}