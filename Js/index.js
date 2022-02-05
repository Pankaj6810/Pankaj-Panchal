const header = document.querySelector("#banner");

const tl = new TimelineMax();

tl.fromTo(header, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut});