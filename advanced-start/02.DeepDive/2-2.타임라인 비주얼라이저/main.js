const $ = node => document.querySelector(node);


gsap.to('svg',{autoAlpha:1});



const animation = gsap.timeline({

});

animation.to('#star',{duration:1,x:1150})
animation.to('#circle',{duration:3,x:1150}, '<')
animation.to('#square',{duration:1,x:1150})


const children = animation.getChildren();
const childrenList = children.length;
const pixelPerSecond = 200;


children.forEach((tween,index)=>{
    gsap.set(`#tween${index}`,{x: tween.startTime() * pixelPerSecond})
    gsap.set(`#rect${index}`,{width: tween.duration() * pixelPerSecond})
})



// for(let i = 0; i<childrenList; i++){
//     gsap.set(`#tween${i}`,{x:children[i].startTime() * pixelPerSecond })
//     gsap.set(`#rect${i}` ,{width:children[i].duration() * pixelPerSecond});
//     console.log(children[i].duration());
// }




const time = $('#time')


const maxX = animation.duration() * pixelPerSecond

function handleMoveHead(){
    gsap.set('#playhead',{x:animation.progress() * maxX})
    time.textContent = animation.time().toFixed(1);
}

animation.eventCallback('onUpdate',handleMoveHead)


const dragger = Draggable.create('#playhead',{
    type : 'x',
    cursor:'pointer',
    trigger:'#timeline',
    bounds:{minX:0,maxX:maxX},
    onDrag(){
        animation.pause();
        animation.progress(this.x/maxX);
    }
})



$('#play').addEventListener('click',()=>{animation.play()})
$('#pause').addEventListener('click',()=>{animation.pause()})
$('#reverse').addEventListener('click',()=>{animation.reverse()})