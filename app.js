gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1",{
  y:80,
  opacity:0,
  duration:1.2
});

gsap.from(".hero-content p",{
  y:40,
  opacity:0,
  duration:1,
  delay:0.3
});

gsap.from(".buttons button",{
  scale:0.8,
  opacity:0,
  duration:0.8,
  stagger:0.2,
  delay:0.6
});

/* Cards Animation */
gsap.from(".card",{
  scrollTrigger:{
    trigger:".card",
    start:"top 85%"
  },
  y:80,
  opacity:0,
  duration:1,
  stagger:0.2
});

gsap.from(".product-card",{
  scrollTrigger:{
    trigger:".product-card",
    start:"top 85%"
  },
  y:80,
  opacity:0,
  duration:1,
  stagger:0.2
});

gsap.from(".community-card",{
  scrollTrigger:{
    trigger:".community-card",
    start:"top 85%"
  },
  y:80,
  opacity:0,
  duration:1,
  stagger:0.2
});