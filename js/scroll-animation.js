let controller;
let opacityScene;

function animateSections() {
    // Init Controller
    controller = new ScrollMagic.Controller();
    // Select some things
    const sections = document.querySelectorAll('.section');
    // Loop over each section
    sections.forEach(section => {
        const opacityTl = gsap.timeline({
            defaults: { duration: 1, ease: "power2.inOut" }
        });
        opacityTl.fromTo(section, { opacity: 0 }, { opacity: 1 });
        // Create Scene
        opacityScene = new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.5,
            reverse: false
        })
            .setTween(opacityTl)
            // .addIndicators({ colorStart: 'white', colorTrigger: 'yellow', name: 'section' })
            .addTo(controller);
    })
}

animateSections();