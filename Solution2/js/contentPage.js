$(document).ready(function(){

    if ($('.side-bar').height() > $('.content-bar').height()) {
        $('.content-bar').height($('.side-bar').height());
    } else {
        $('.side-bar').height($('.content-bar').height());
    }
       
});

$(document).ready(function(){
    $("div.show-more > a").click(function(){

        $("div#hiddenProjects").removeClass("hidden");
        $("div#hiddenProjects").show();


 
        if ($('.side-bar').height() > $('.content-bar').height()) {
            $('.content-bar').height($('.side-bar').height());
        } else {
            $('.side-bar').height($('.content-bar').height());
        } 
   });
 });