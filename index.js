var crsr = document.querySelector("#curser");
var crsrback = document.querySelector("#curserback");

document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrback.style.left = dets.x-150 + "px";
    crsrback.style.top = dets.y-150 + "px";
});


gsap.to("#nav", {
    backgroundColor: "rgba(0,0,0,0.8)",
    height: "90px",
    duration: 0.6,
    scrollTrigger: {
        trigger: "#page1",
        start: "top -10%",
        end: "top -11%",
        scrub: true,
        /* markers: true, */
       
    }
});
 gsap.to("#main",{
    backgroundColor:"#0b0b0b",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        stop:"top -70%",
        scrub:2,

    }
 })