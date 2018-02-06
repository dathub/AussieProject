$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['member1', 'member2', 'member3', 'member4', 'member5', 'member6'],
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

function getMemeberDetails(hash) {
    var memeberName = "";
    var memberDesignation = "";
    var memberDescription = "";
    switch(hash) {
        case "member1":
            memeberName = "charbel azar";
            memberDesignation = "content director - business and creative";
            memberDescription = "‘Chucky’,  the man who started it all– has ‘a reverent obsession with colourful linen and fabrics, basketball shoes and a fear of being ordinary’. Can we just take a moment to remind him he will never be ordinary, a colourful linen and basketball shoe obsession? What a combo Chucky.</br>It takes one glance at the socks this man is sporting to know he is fiercely passionate about the brand he has created. Not because they are usually coloured socks, but rather they speak of his individuality, his subconscious refusal to let social expectation restrict his personality. He lives a life less ordinary. Chuck has an admirable drive to take the seemingly vanilla and make it chocolate,  an opportunity for creativity becomes his obsession. You will never meet a fully grown male that walks away from a client meeting with a bigger pearly-white grin, and squeal of excitement as he arrives at the studio than this guy. His passion, pride and energy drive this operation to colourful places.</br>With a Masters in Commerce, a Bachelor in Economics and extensive training in film and production, colour grading, lighting, camera operation and directing, Chucky seamlessly leads the crew to explore our talents, delivering time and time again innovative, intuitive, vivacious and soulful creative content.";
            break;
        case "member2":
            memeberName = "luis pimenta";
            memberDesignation = "content director - production";
            memberDescription = "Our resident Bob Marley, both in studio acoustics, appearance and fierce creative talent. If he’s not belting a song or humming through his projects there is room for concern. Lu is undoubtedly Coloursock’s secret weapon. Born of Creative talent Lu has directed over 100 television commercials. His work has led to the award of best short movie at VII Cine Mube Vitrine Independente - Sao Paulo, best short movie at IV Mostra Perpendicular de Cinema - Uberlandia, Official Selection Mostra De Cinema De Tiradentes, Official Selection Curta o Genero - Fortaleza, Official Selection Mostra Competitiva do III Curta Amazonia in Brazil and was selected to be a part of the film festival TINA B in Prague 2013.</br>He has over 15 years experience in international media outlets, agencies and major television stations including Rede Globo. Lu has built an empire of content that has been recognised across the world. With a Bachelor degree in Advertising, a Masters of Business Communication and an extensive array of directing, motion graphics, film and production qualifications, Lu has the tools to make his creative ideas, a reality. Unbeknown to his humble existence he is an unstoppable force of creativity, happiness and talent and he is everyday making a visible difference in this world.";
            break;
        case "member3":
            memeberName = "stephanie delhey";
            memberDesignation = "creative lead";
            memberDescription = "Steff, our cheeky (af) Chilean, German import, has an inextinguishable creative curiousity. She grew up on a farm in the chilly Chilean Patagonia, with her American/European parents (both vets, or as she would say ‘green peace parents’). Cause and affect of a multicultural upbringing has this one bestowed with an unrelinquishing itch for adventure and cultural discovery. At 19 the adventures began, she went looking for new landscapes, finding her way to South Africa’s Cape Town where she studied design and photography and fulfilled her dream of getting a decent tan. In pursuit of further professional growth, more sun tans and adventure, she found her way to Sydney and began a career in the world of advertising. Working simultaneously through a Bachelor in Communication (Social and Political Science), her next pursuit of adventure led this bundle of audacity to our doorstep. Steff, award winning Art Director, had us at ‘hello’. Her portfolio, not short of remarkable, detailed a career working with brands such as, Pernod Ricard (Absolut Vodka, G.H. Mumm and Chivas Regal), Coca Cola, Telstra, Chanel, ASOS, Audi and Disney just to name a few. Her pursuit to create social change is at the heart of everything she does. This half creative, half humanitarian is the perfect fit to Coloursock in her ambitious, world-rocking, selfless and flavourful approach to life. ";
            break;
        case "member4":
            memeberName = "jana ayre";
            memberDesignation = "content director - strategy and creative";
            memberDescription = "Steff, our cheeky (af) Chilean, German import, has an inextinguishable creative curiousity. She grew up on a farm in the chilly Chilean Patagonia, with her American/European parents (both vets, or as she would say ‘green peace parents’). Cause and affect of a multicultural upbringing has this one bestowed with an unrelinquishing itch for adventure and cultural discovery. At 19 the adventures began, she went looking for new landscapes, finding her way to South Africa’s Cape Town where she studied design and photography and fulfilled her dream of getting a decent tan. In pursuit of further professional growth, more sun tans and adventure, she found her way to Sydney and began a career in the world of advertising. Working simultaneously through a Bachelor in Communication (Social and Political Science), her next pursuit of adventure led this bundle of audacity to our doorstep. Steff, award winning Art Director, had us at ‘hello’. Her portfolio, not short of remarkable, detailed a career working with brands such as, Pernod Ricard (Absolut Vodka, G.H. Mumm and Chivas Regal), Coca Cola, Telstra, Chanel, ASOS, Audi and Disney just to name a few. Her pursuit to create social change is at the heart of everything she does. This half creative, half humanitarian is the perfect fit to Coloursock in her ambitious, world-rocking, selfless and flavourful approach to life. ";
            break;
        case "member5":
            memeberName = "luis pimenta";
            memberDesignation = "content director - production";
            memberDescription = "Steff, our cheeky (af) Chilean, German import, has an inextinguishable creative curiousity. She grew up on a farm in the chilly Chilean Patagonia, with her American/European parents (both vets, or as she would say ‘green peace parents’). Cause and affect of a multicultural upbringing has this one bestowed with an unrelinquishing itch for adventure and cultural discovery. At 19 the adventures began, she went looking for new landscapes, finding her way to South Africa’s Cape Town where she studied design and photography and fulfilled her dream of getting a decent tan. In pursuit of further professional growth, more sun tans and adventure, she found her way to Sydney and began a career in the world of advertising. Working simultaneously through a Bachelor in Communication (Social and Political Science), her next pursuit of adventure led this bundle of audacity to our doorstep. Steff, award winning Art Director, had us at ‘hello’. Her portfolio, not short of remarkable, detailed a career working with brands such as, Pernod Ricard (Absolut Vodka, G.H. Mumm and Chivas Regal), Coca Cola, Telstra, Chanel, ASOS, Audi and Disney just to name a few. Her pursuit to create social change is at the heart of everything she does. This half creative, half humanitarian is the perfect fit to Coloursock in her ambitious, world-rocking, selfless and flavourful approach to life. ";
            break;
        default:
            memeberName = "charbel azar";
            memberDesignation = "content director - business and creative";
            memberDescription = "‘Chucky’,  the man who started it all– has ‘a reverent obsession with colourful linen and fabrics, basketball shoes and a fear of being ordinary’. Can we just take a moment to remind him he will never be ordinary, a colourful linen and basketball shoe obsession? What a combo Chucky.</br>It takes one glance at the socks this man is sporting to know he is fiercely passionate about the brand he has created. Not because they are usually coloured socks, but rather they speak of his individuality, his subconscious refusal to let social expectation restrict his personality. He lives a life less ordinary. Chuck has an admirable drive to take the seemingly vanilla and make it chocolate,  an opportunity for creativity becomes his obsession. You will never meet a fully grown male that walks away from a client meeting with a bigger pearly-white grin, and squeal of excitement as he arrives at the studio than this guy. His passion, pride and energy drive this operation to colourful places.</br>With a Masters in Commerce, a Bachelor in Economics and extensive training in film and production, colour grading, lighting, camera operation and directing, Chucky seamlessly leads the crew to explore our talents, delivering time and time again innovative, intuitive, vivacious and soulful creative content.";
        }

    return [memeberName,memberDesignation,memberDescription];
}

$(window).bind('hashchange', function(){
    
        var newHash = window.location.hash.substring(1);
        if (newHash) {
            var memInfo = getMemeberDetails(newHash);

            var sideTital = document.getElementsByClassName('side-title');
            var descriptionCrew = document.getElementsByClassName('descriptions-crew');

            var sideTitleReplacememtns = {"h2":memInfo[0]};
            var descriptionCrewReplacements = {".name":memInfo[0],".designation":memInfo[1],".details":memInfo[2]};


            fadeElement(sideTital, sideTitleReplacememtns);
            fadeElement(descriptionCrew, descriptionCrewReplacements);
        };
        
});
    
$(window).trigger('hashchange');