$(document).ready(function(){

    if ($('.side-bar').height() > $('.content-bar').height()) {
        $('.content-bar').height($('.side-bar').height());
    } else {
        $('.side-bar').height($('.content-bar').height());
    }
       
});

$(document).ready(function(){
    $("div.show-more > a").click(function(){

    

        if($("div.show-more > a > div.caption").text()=="MORE PROJECTS") {
            $("div#hiddenProjects").removeClass("hidden");
            $("div#hiddenProjects").show();
            $("div.show-more > a > div.caption").text("SHOW LESS");
            $("div.show-more > a > img").hide();
            $('.side-bar').height($('#root').height() + 260 +'px');
        } else if( $("div.show-more > a > div.caption").text()=="SHOW LESS"){
            // $("div#hiddenProjects").hide();
            // $("div#hiddenProjects").css("display","none");
            $("div#hiddenProjects").addClass("hidden");
            $("div.show-more > a > div.caption").text("MORE PROJECTS");
            $("div.show-more > a > img").show();
              $('.side-bar').height($('.content-bar').height() - 260 +'px');
        }

   });
 });