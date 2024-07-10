// function custom(i, t, arr) {
//     // if(i % 2 !== 0 ){
//     //     return 100
//     // }
//     // if(i > 5) return 0
//
//     if (t.classList.contains('orange')) {
//         return 0;
//     }
//     return i * 30
// }
//
//
// gsap.to('.box', {
//     x: custom,
//     y: custom,
//     rotation: (i, t) => {
//         if (t.classList.contains('orange')) {
//             return 0;
//         }
//         return 360
//
//     },
//     stagger: 0.1
// });


function custom(i, t, arr) {
    if (t.classList.contains('blue')) {
        return 360
    }
    return -360

}


gsap.to('.blue , .pink', {
    rotation: custom,
    repeat: -1,
    duration: 2,
    ease: 'none'
})











