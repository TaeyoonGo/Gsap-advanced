gsap.registerPlugin(GSDevTools, SplitText);


gsap.set('.stage', {autoAlpha: 1})


// const split = new SplitText('h1',{type:'chars'})
//
// const tl = gsap.timeline();
//
// tl.from(split.chars,{y:10
//     .to(split.chars,{color:gsap.utils.wrap(['red','orange'])})


gsap.registerEffect({
    name: 'textEffect',
    defaults:{
        y:-100,
        colors: ['red', 'orange']
    },
    extendTimeline: true,
    effect: (target, config) => {
        const split = new SplitText(target, {type: 'chars'})
        const tl = gsap.timeline();
        tl.from(split.chars, {y: config.y, opacity: 0, stagger: 0.05})
            .to(split.chars, {color: gsap.utils.wrap(config.colors)})


        return tl
    }
})



const animation = gsap.timeline();


    animation.textEffect('h1')
             .textEffect('h2',{y:100,colors:['blue','green']})






