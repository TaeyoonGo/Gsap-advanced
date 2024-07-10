gsap.registerPlugin(GSDevTools, SplitText);


gsap.set('.stage', {autoAlpha: 1})


gsap.registerEffect({
    name: 'textEffect',
    extendTimeline:true,
    defaults:{
        y:-100,
        color:['red', 'orange']
    },
    effect: (target, config) => {
        const split = new SplitText(target, {type: 'chars'})
        const tl = gsap.timeline();
        tl.from(split.chars, {y: config.y, opacity: 0, stagger: 0.05})
            .to(split.chars, {color: gsap.utils.wrap(config.color)})

        return tl;
    }
})

const animation = gsap.timeline();

    animation.textEffect('h1')
        .textEffect('h2',{y:'random(-100,100)',color:['blue','green']})







//
//

