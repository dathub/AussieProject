// function fadeElement(element, replacements) {
//     $(element).fadeOut(700, function() {
//         $(element).hide(function() {

//             for(var key in replacements) {
//                 var value = replacements[key];
//                 $(element).find(key).html(value);
//             }

//             $(element).fadeIn(1500);
//         });
//     });
// }

// $(window).bind('hashchange', function(){
    
//         var newHash = window.location.hash.substring(1);
//         if (newHash) {

//             switch(newHash) {
//                 case "section1":
//                     $('#section1').fadeIn(1500);
//                     break;
//                 case "section2":
//                     $('#section2').fadeIn(1500);
//                     break;
//                 case "section3":
//                     $('#section3').fadeIn(1500);
//                     break;
//                 default:
//                     $('#section0').fadeIn(1500);
//             }
        
//         };
        
// });
    
// $(window).trigger('hashchange');

$('#btn1').on('click',function(){
    $('#section0').fadeOut(700)
    $('#section1').fadeIn(1500);
});

$('#btn2').on('click',function(){
    $('#section1').fadeOut(700)
    $('#section2').fadeIn(1500);
});

$('#btn3').on('click',function(){
    $('#section2').fadeOut(700)
    $('#section3').fadeIn(1500);
});
