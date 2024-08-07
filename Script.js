function valuesetter() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });
  gsap.set("#home .row .image", { opacity: 0 });
  gsap.set(".imagery #maincard .card", { opacity: 0 });
  gsap.set(".imagery .textcontent h1", { y: "100%" });
  document.querySelectorAll("#Visual>g").forEach((e) => {
    let character = e.childNodes[1].childNodes[1];

    character.style.strokeDasharray = character.getTotalLength() + "px";

    character.style.strokeDashoffset = character.getTotalLength();
  });
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach((e) => {
    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = e.innerHTML;
    parent.appendChild(child);

    e.innerHTML = "";
    e.appendChild(parent);
  });
}

// gsap.to(".parent .child",{
//     y:"-100%",
//     duration:1,
//     delay:2,
//     ease:Circ.easeInOut,
// })
function loaderAnimation() {
  const t1 = gsap.timeline();

  t1.from(" #loader .child span", {
    x: 100,
    delay: 1,
    stagger: 0.1,
    duration: 1.4,
    // ease: Circ.easeInOut,
    ease: "expo.inOut",
  })
    .to("#loader .parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#loader", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to("#green", {
      height: "0%",
      top: 0,
      duration: 1,
      delay: -0.3,
      ease: Circ.easeInOut,
      onComplete: function () {
        animatehomepage();
      },
    });
}
const animateSvg = () => {
  gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
  });
};

const animatehomepage = () => {
  const tl = gsap.timeline();
  tl.to("#nav a", {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    ease: Expo.easeInOut,
  })
    .to("#home .parent .child", {
      y: 0,
      stagger: 0.1,
      opacity: 1,
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to("#home .row .image", {
      opacity: 1,
      delay: -0.5,
      ease: Expo.easeInOut,

      onComplete: function () {
        animateSvg();
      },
    })
    .to(".imagery .textcontent h1", {
      y: "0%",
      duration: 2,
      ease: Expo.easeInOut,
    })
    .to(".imagery #maincard .card", {
      opacity: 1,
      stagger: 0.1,
      opacity: 1,
      duration: 2,
      ease: Expo.easeInOut,
    });
};

function locomoticAnim() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
}

function cardhoverAnim() {
  const tl = gsap.timeline();
  tl.to(".imagery #maincard", {
    transform: "rotate(-20deg)",
    duration: 2,
    //  stagger:2,
    scrollTrigger: {
      trigger: ".imagery #maincard",
      scroller: "body",
      start: "top 50%",
      end: "top 2%",
      scrub: 1,
    },
    onComplete: function () {
      alert("sdfsa");
    },
  });
}

function cardshow() {
  document.querySelectorAll(".images .cnt").forEach(element => {
    element.addEventListener("mousemove", e=>{
      
      let target = e.target.dataset.index;
      
      document.querySelector(".cursor").children[target].style.opacity = 1
      document.querySelector(".cursor").children[
        target
      ].style.transform = `translate(${e.clientX}px,${e.clientY}px)`;

      document.querySelector(".work").style.backgroundColor = e.target.dataset.color
    })
    element.addEventListener("mouseleave", (e) => {
      document.querySelector(".cursor div").style.opacity = 0
         document.querySelector(".work").style.backgroundColor = "#fff"
    });
  });
  
}
locomoticAnim();
revealToSpan();
valuesetter();
loaderAnimation();
cardhoverAnim();
cardshow()
