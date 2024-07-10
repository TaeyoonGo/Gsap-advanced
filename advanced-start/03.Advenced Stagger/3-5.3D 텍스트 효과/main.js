const tl = gsap.timeline();
const numberofTarget = gsap.utils.toArray('.utils > div').length;

const duration = 0.5
const delay = duration * (numberofTarget -1 );
const pause = 0.5
const stagger = duration + pause

gsap.set('.utils > div',{
    transformOrigin:'50% 50% -50'
})


tl.from('.utils > div',{
    rotationX:-90,
    y:50,
    opacity:0,
    stagger:{
        each: stagger,
        repeat:-1,
        repeatDelay:delay
    }
})
.to('.utils > div',{
    rotationX:90,
    y:-50,
    opacity: 0,
    stagger:{
        each: stagger,
        repeat:-1,
        repeatDelay:delay
    }
},duration)