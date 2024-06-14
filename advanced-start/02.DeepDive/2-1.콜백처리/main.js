const $ = node => document.querySelector(node);


//  callback -> 나중에 일어나는 일 

// onComplete
// onUpdate
// onStart
// onRepeat

const h1 = $('h1')


gsap.to('.orange',{
    duration:2.5,
    y:100,
    onComplete: complete,
    onCompleteParams : ['오렌지',3],

    onUpdate() {
        h1.textContent = `애니메이션 재생 중`
    }
})

function complete(color,number){
    console.log(color)
    
    h1.textContent = `${color + 3} 애니메이션 재생 끝`

    gsap.to('.orange',{rotate:360})
}







