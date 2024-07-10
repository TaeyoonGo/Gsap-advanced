gsap.to('.stage', {autoAlpha: 1})

//구조 분해 할당
const {wrap , registerEffect} = gsap.utils



/*Gsap SplitText 유료 라이브러리 이므로 무료 라이브러리를 사용 하던가 ㅁㅌ의 */

/*유사배열*/
// const list = document.querySelectorAll('h1 > div')// nodeList
// const listArray = Array.from(list)

/*배열*/
// const list = gsap.utils.toArray('h1 > div')


const split = new SplitText('h1', {type: 'chars'})

const tl = gsap.timeline();

tl.from(split.chars,{
    y:wrap([30,-30]),
    opacity:0,
    stagger:{
        each:0.02,
        from:'random'
    }
})
    .to(split.chars,{
        x:10,
        color:wrap(['red','blue']),
        stagger:{
            each: 0.02
        }
    })




GSDevTools.create();