$(document).ready(function(){
    $('.side-bar').height($('.content-bar').height());
});

// $(document).ready(function(){
//     $("div.show-more > a").click(function(){

    

//         if($("div.show-more > a > div.caption").text()=="MORE PROJECTS") {

//             $("div.show-more > a > div.caption").text("SHOW LESS");
//             $("div.show-more > a > img").hide();
//             $('.side-bar').height($('#root').height() + 260 +'px');
//         } else if( $("div.show-more > a > div.caption").text()=="SHOW LESS"){
//             $("div.show-more > a > div.caption").text("MORE PROJECTS");
//             $("div.show-more > a > img").show();
//               $('.side-bar').height($('.content-bar').height() - 260 +'px');
//         }

//    });
//  });