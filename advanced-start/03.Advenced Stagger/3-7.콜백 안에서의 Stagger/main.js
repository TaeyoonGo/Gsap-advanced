// gsap.to('.tiger > div',{
//     y:100,
//     stagger:{
//         each:0.2,
//         repeat:1,
//         yoyo:true,
//         onComplete(){
//             gsap.to(this.targets()[0],{
//                 rotation:360
//             })
//         },
//     }
// })


// const {chars,lines} = new SplitText('.word > div')
//
// const tl = gsap.timeline();
//
//
//
//
// tl.from(chars,{
//     opacity : 0,
//     duration: 2,
//     stagger:{
//         each:0.1,
//         from:'random',
//         ease:'power1',
//         onComplete(){
//             gsap.to(this.targets()[0],{
//                 duration:0,
//                 color:"#51ff00",
//                 delay:0.5,
//             })
//
//         }
//     }
// })
//     .to(lines,{
//         delay:1,
//         y:30,
//         opacity: 0,
//         stagger:{
//             each: 0.2
//         }
//     })

const l = 8 * 13;

for (let i = 0; i< l; i++){
    let template = `
<div class="box" data-index="${i}"></div>
`

    document.querySelector('.stage') ?.insertAdjacentHTML('beforeend',template)
}


const tween = gsap.to('.box',{
    scale:0.3,

    stagger:{
        each : 0.5,
        onStart(){
            const target = this.targets()[0];

            if(target.dataset.stop === 'stop'){
                tween.pause(this.startTime());
            }
        }
    }
})


const stage = document.querySelector('.stage')
stage.addEventListener('click',(e)=>{
    if(e.target.classList.contains('box')){
        gsap.to(e.target,{
            backgroundColor : 'red',
            attr:{
                'data-stop':'stop'

            }
        })
    }
})











// const l = 8 * 13;
//
// for(let i = 0; i < l; i++){
//   let template = /* html */`
//     <div class="box"></div>
//   `
//   document.querySelector('.stage')?.insertAdjacentHTML('beforeend',template)
//
// }



















