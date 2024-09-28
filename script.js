var tl = gsap.timeline()


tl.from("nav h3",{
  y:-50,
  opacity:0,
  duration:0.5,
  delay:0.5,
  stagger:0.2
})


tl.from(".content h3",{
  x:-500,
  opacity:0,
  duration:0.5,
  delay:0.1,
  stagger:0.2
})

tl.from(".content img",{
  y:-300,
  opacity:0,
  rotate:45,
  duration:0.5,
  stagger:0.2
})


