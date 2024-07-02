const $ = (node) => document.querySelector(node)
const tiger = $('#tiger')
const route = $('#route')
const button = $('#button')
const time = $('#time')
const progress = $('#progressSlider')
const home = $('#home')
const mountain = $('#mountain')
const river = $('#river')
const company = $('#company')
const svg = $('svg');

const animation = gsap.to(tiger,{
    duration: 6,
    motionPath:{
        path:route,
        align:tiger
        },
    onUpdate : update,
    onComplete: () => button.textContent = 'play'
    },
)

function update () {
    time.textContent = animation.time().toFixed(2)
    progress.value = animation.progress();
}

function setButtonState() {
    button.textContent = animation.paused() ? 'play' : 'pause'
}

progress.addEventListener('input',(e)=>{
    const target = e.currentTarget
    animation.pause().progress(target.value)
    button.textContent = 'play'
})


button.addEventListener('click',()=>{
    animation.paused(!animation.paused())

    if(animation.progress()===1){
        animation.restart();
    }


    setButtonState();


})

svg.addEventListener('click',(e)=>{
    animation.pause();
    const target = e.target.closest('g');
    if(!target) return;

    const id = target.getAttribute('id')
    if(!id) return;

    let progress = 0;


    if(id === 'svg') return;


    switch (id){
        case 'home' :
            progress = 0;
            break;
        case 'mountain' :
            progress = 0.21;
            break;
        case 'river' :
            progress = 0.47;
            break;
        case 'company' :
            progress = 1;
            break;
    }

    gsap.to(animation, {progress:progress,duration:1})
    setButtonState();
})



// home.addEventListener('click',()=>{
//     gsap.to(animation,{progress:0,duration:3})
// })
//
// mountain.addEventListener('click',()=>{
//     gsap.to(animation,{progress:0.21,duration:3})
// })
//
//
// river.addEventListener('click',()=>{
//     gsap.to(animation,{progress:0.47,duration:3})
// })
//
//
// home.addEventListener('click',()=>{
//     gsap.to(animation,{progress:1,duration:3})
// })

