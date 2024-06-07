const $ = (node) => document.querySelector(node);

// function $(node){
//     return document.querySelector(node)
// }


const tiger = $('#tiger')
const BUTTON = $('#button')
const time = $('#time')
const progress = $('#progressSlider')



const animation = gsap.to(tiger, {
    duration: 6,
    motionPath: {
        path: "#route",
        align: tiger
    },
    onUpdate: update,
    onComplete: () => BUTTON.textContent = 'play'
})

function update(){
    time.textContent = animation.time().toFixed(2);
}


BUTTON.addEventListener('click', () => {
    animation.paused(!animation.paused());
    if (animation.progress() === 1) {
        animation.restart()
    }
    BUTTON.textContent = animation.paused() ? 'play' : 'pause'
})


progress.addEventListener('input',() => {

})

//문 vs 식
//값을 반환하지 않음 / 값을 반환

//조건 문 / if / switch / 반복 문 / for / while / do..while

// 삼항 연산자 : 계산되는 피 연산자가 3개


// const result  = condition ? value1 : value2