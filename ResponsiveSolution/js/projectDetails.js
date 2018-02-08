function fadeElement(element, replacements) {
    for(var key in replacements) {
        var value = replacements[key];
        $(element).find(key).html(value);
    }
}

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

function getMemeberDetails(hash) {
    var memeberName = "";
    var memberDesignation = "";
    var memberDescription = "";
    switch(hash) {
        case "member1":
            memeberName = "first link property";
            memberDesignation = "#first link property";
            memberDescription = "project description blah blah blah project description blah blah blah project description blah blah blah project description blah blah blah            ";
            break;
        case "member2":
            memeberName = "project 1";
            memberDesignation = "#content director - production";
            memberDescription = "project description blah blah blah project description blah blah blah project description blah blah blah project description blah blah blah            ";
            break;
        case "member3":
            memeberName = "project 2";
            memberDesignation = "#creative lead";
            memberDescription = "project description blah blah blah project description blah blah blah project description blah blah blah project description blah blah blah            ";
            break;
        case "member4":
            memeberName = "project 3";
            memberDesignation = "#content director - strategy and creative";
            memberDescription = "project description blah blah blah project description blah blah blah project description blah blah blah project description blah blah blah            ";
            break;
        case "member5":
            memeberName = "project 4";
            memberDesignation = "#content director - production";
            memberDescription = "project description blah blah blah project description blah blah blah project description blah blah blah project description blah blah blah            ";
            break;
        default:
            memeberName = "project 5";
            memberDesignation = "#content director - business and creative";
            memberDescription = "project description blah blah blah project description blah blah blah project description blah blah blah project description blah blah blah            ";
        }

    return [memeberName,memberDesignation,memberDescription];
}

function writeDescription(newHash) {
    var memInfo = getMemeberDetails(newHash);
    
    var sideTital = document.getElementsByClassName('side-title');
    var descriptionCrew = document.getElementsByClassName('descriptions-box');

    var sideTitleReplacememtns = {"h2":memInfo[0]};
    var descriptionCrewReplacements = {".description-header-text":memInfo[0],".wrapper-middle-htag":memInfo[1],".wrapper-middle-text":memInfo[2]};


    fadeElement(sideTital, sideTitleReplacememtns);
    fadeElement(descriptionCrew, descriptionCrewReplacements);
}

$(document).ready(function() {
    writeDescription();
    
    $('#fullpage').fullpage({
        anchors: ['member1', 'member2', 'member3', 'member4', 'member5', 'member6'],
        scrollingSpeed: 1200,
        scrollOverflow: false,
        verticalCentered: false,
        css3: true,
        responsiveWidth: 900,
        afterResponsive: function(isResponsive){
            
        }
    });
});

$(window).bind('hashchange', function(){
    
        var newHash = window.location.hash.substring(1);
        if (newHash) {
            writeDescription(newHash);
        };      
});
    
$(window).trigger('hashchange');