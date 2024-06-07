const $ = (node) => document.querySelector(node);

// function $(node){
//     return document.querySelector(node)
// }


const tiger = $('#tiger')

const animation = gsap.to(tiger,{
    duration:6,
    motionPath:{
        path:"#route",
        align:tiger
    }
})

animation.timeScale(3);


console.log(animation.timeScale(3))





