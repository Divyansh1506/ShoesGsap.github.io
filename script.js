var tl =gsap.timeline()

tl.from("#main-img",{
    x:-1100,
    duration :2,
    rotate : 320,
})

gsap.from("#main-h1",{
    x:1500,
    duration :2,
})

gsap.from("nav",{
    y:-70,
    duration :2,
})

gsap.from("#main-para",{
    y:220,
    duration:2,
})
gsap.from("#text",{
    rotate : 180,
    duration:2,
})