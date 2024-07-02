// 구조분해할당 distructuring assigment


// const user = {
//     name : 'tiger',
//     age : 40,
//     sayHi(){
//         return 'hi'
//     }
// }
//
// const {name : nickname,age,sayHi} = user
//
// console.log(nickname)


gsap.set('.bg',{opacity:0})



gsap.registerEffect({
    name : 'textEffect',
    extendTimeline:true,
    default:{
        y:30,
        opacity:0
    },
    effect:(target,{y,opacity}) => {


        const {chars} = new SplitText(target,{type:'chars'})

        const tl = gsap.timeline();


        tl.from(chars,{y:y,opacity: opacity,stagger:0.1})
            .to(chars,{delay:1, opacity:opacity,stagger:0.03})

        return tl
    }

})



gsap.effects.textEffect('ex1')