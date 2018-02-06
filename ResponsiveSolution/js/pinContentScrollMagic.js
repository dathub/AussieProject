var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave'
    }
});
 
// Create scene
$(function() {
   
    new ScrollMagic.Scene({
        triggerElement:"#pin"
    })
    .setPin("#pin")
    .addTo(controller);
});
