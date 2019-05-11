import { TweenMax, TimelineMax } from "gsap"

TweenMax.set("#box", {
  backgroundColor: "green",
  width: "150px",
  height: "150px",
  x: "150px",
  y: "150px",

  left: "50%",
  top: "50%",
  xPercent: "-50",
  yPercent: "-50"
})

document.addEventListener("click", event => {
  const { x, y } = event
  TweenMax.fromTo(
    "#box",
    1,
    { x, y },
    { x: 600, y: 600 }
  )
})

