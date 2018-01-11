$(document).ready(function(){
    $('.side-bar').height($('.content-bar').height());
});

window.onresize = function() {
    console.log("Resize Detected");
    $('.side-bar').height($('.content-bar').height());
};