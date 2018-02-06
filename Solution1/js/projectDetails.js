$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'],
        scrollingSpeed: 1200
    });
});


function fadeElement(element, replacements) {
    $(element).fadeOut(700, function() {
        $(element).hide(function() {

            for(var key in replacements) {
                var value = replacements[key];
                $(element).find(key).html(value);
            }

            $(element).fadeIn(1500);
        });
    });
}

function getprojectDetails(hash) {
    var projectName = "";
    var projectHashTags = "";
    var projectDescription = "";
    switch(hash) {
        case "project1":
            projectName = "project1";
            projectHashTags = "#project1";
            projectDescription = "project1 description";
            break;
        case "project2":
            projectName = "project2";
            projectHashTags = "#project2";
            projectDescription = "project2 description";
            break;
        case "project3":
            projectName = "project3";
            projectHashTags = "#project3";
            projectDescription = "project3 description";
            break;
        default:
            projectName = "project6";
            projectHashTags = "#project6";
            projectDescription = "project6 description";
         }

    return [projectName,projectHashTags,projectDescription];
}

$(window).bind('hashchange', function(){
    
        var newHash = window.location.hash.substring(1);
        if (newHash) {
            var memInfo = getprojectDetails(newHash);

            var sideTital = document.getElementsByClassName('side-title');
            var descriptionCrew = document.getElementsByClassName('descriptions-box');

            var sideTitleReplacememtns = {"h2":memInfo[0]};
            var descriptionCrewReplacements = {".projectName":memInfo[0],".projectHashTags":memInfo[1],".projectDescription":memInfo[2]};


            fadeElement(sideTital, sideTitleReplacememtns);
            fadeElement(descriptionCrew, descriptionCrewReplacements);
        };
        
});
    
$(window).trigger('hashchange');