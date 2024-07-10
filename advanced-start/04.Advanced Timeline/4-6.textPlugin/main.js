


gsap.to('.cursor',{
    opacity:0,
    repeat:-1,
    yoyo:true,
    duration: 0.3,
    repeatDelay: 0.4
})








const text = ['html', 'css', 'javascript', 'react', 'gsap']






function typing(arr) {
    const tl = gsap.timeline()
        .to('.big', {
            duration : arr[0] === 'javascript' ? 0.6 : 0.3,
            text: text[0],
            repeat: 1,
            yoyo: true,
            repeatDelay: 1
        })

    arr.push(arr.shift())

    gsap.delayedCall(3,typing,[text])
}

typing(text)