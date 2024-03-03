var tl = gsap.timeline()

tl.from("nav",{
    opacity:0,
    delay:0.4
})

tl.from("nav a",{
    y:-80,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

tl.from("#home h5 , #home h1 , #home h5, #home p, #home button",{
    y: 40,
    opacity:0,
    duration:0.8,
    stagger:0.5
})

gsap.from(".card",{
    x: -100,
    opacity:0,
    duration:2,
    stagger:0.7,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "top 0%",
        scrub:5
    }
})

gsap.from("#about-img ",{
    x: -500,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#about-img",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end: "top 0%",
        scrub:5
    }
})

gsap.from("#about h2 , #about p",{
    y: 50,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#about ",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end: "top 0%",
        scrub:5
    }
})

gsap.from("#ourTeam .card li ",{
    x: -100,
    duration:2,
    opacity:0,
    stagger:0.2,
    
    scrollTrigger:{
        trigger:"#ourTeam li",
        scroller:"body",
        // markers: true,
        start :"top 100%",
        end:"top 80%",
        scrub:4,
    }
})

gsap.from("#ourTeam img",{
    y: -100,
    duration:1,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#ourTeam img",
        scroller:"body",
        // markers: true,
        start :"top 50%",
        end:"top 30%",
        scrub:2
    }
})

gsap.from("#portfolio .card",{
    duration:2,
    scale:0.5,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#portfolio .card",
        scroller:"body",
        // markers: true,
        start :"top 70%",
        end:"top -30%",
        scrub:2,
    }
})


