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
    // console.log(this);
    h1.textContent = `${color + 3} 애니메이션 재생 끝`
    gsap.to(this.targets()[0],{rotate:360})
}



class Tiger {
    constructor(target,name) {
        this.animation = gsap.to(target,{
            x:100,
            onComplete: this.complete,
            callbackScope:this
        })
        this.animation.pause();
        this.name = name;
    }
    start(){
        this.animation.play();
    }
    complete(){
        this.rander()
    }

    rander(){
        h1.textcontent = `${this.name} 애니메이션 재생 끝`
    }
}


const pink = new Tiger('.pink','핑핑이')

// const user = {
//     name : 'tiger',
//     age :33,
//     sayHi : function(){ // 일반함수
//
//     },
//     sayBye : () => { // 화살표함수
//
//     },
//     sayGood() { // concise method
//
//     }
// }
//
//
// user.sayHi();




