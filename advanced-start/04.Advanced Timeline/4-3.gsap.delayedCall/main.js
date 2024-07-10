

// 타임라인 자체를 멈추고 다시 재생 시키는 방법은?

let tl = gsap.timeline()
.to('.orange',{duration:2,x:300})
    .addPause('>',wait,[2])
.to('.blue',{duration:2,x:300})





// gsap.delayedCall(2,()=>{
//     console.log('hello')
// })


function wait(sec){
    gsap.delayedCall(sec,()=>{
        tl.play();
    })
}



GSDevTools.create({animation:tl})