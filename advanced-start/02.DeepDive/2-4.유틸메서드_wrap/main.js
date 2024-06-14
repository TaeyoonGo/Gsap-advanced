gsap.to('.stage', {autoAlpha: 1})

/*Gsap SplitText 유료 라이브러리 이므로 무료 라이브러리를 사용 하던가 ㅁㅌ의 */

/*유사배열*/
// const list = document.querySelectorAll('h1 > div')// nodeList
// const listArray = Array.from(list)

/*배열*/
// const list = gsap.utils.toArray('h1 > div')


const split = new SplitText('h1', {type: 'chars'})


const tl = gsap.timeline();


tl.from(split.chars, {
    y: gsap.utils.wrap([100, -100, 30, 500, 0]),
    opacity: 0,
    stagger: {
        each: 0.02,
        from: 'random'
    }
})
    .to(split.chars,{
        x:10,
        y: gsap.utils.wrap([0,200,0,200,200,0]),
        color:gsap.utils.wrap(['red','blue','green']),
        stagger:{
            each: 0.02
        }
    })


GSDevTools.create()