Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 0.69, range: [0, 30] },
    b: { value: -0.95, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.3216443268416875 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 1.85, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.2 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.12, range: [0, 2], _gsap: { id: 6 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 24.43, range: [0, 100] },
  },
  gooey: true,
});

// left side animation
let textElem = document.querySelectorAll(".elem");
let scene = document.querySelector("#main");
textElem.forEach((elem) => {
  let headings = elem.querySelectorAll("h1");
  let index = 0;
  let isAnimating = false;
  scene.addEventListener("click", function () {
    if (isAnimating) return;
    isAnimating = true;
    scene.style.pointerEvents = "none"; // Disable pointer events during animation

    gsap.to(headings[index], {
      top: "-=100%",
      ease: "Expo.easeInOut",
      duration: 0.5,
      onComplete: function () {
        gsap.set(this._targets[0], { top: "100%" });
        isAnimating = false;
        scene.style.pointerEvents = "auto"; // Re-enable pointer events after animation
      },
    });

    index = index === headings.length - 1 ? 0 : index + 1;

    gsap.to(headings[index], {
      top: "-=100%",
      ease: "Expo.easeInOut",
      duration: 0.5,
      onComplete: function () {
        isAnimating = false;
      },
    });
  });
});

// right side animation

let infoElems = document.querySelectorAll("#hero-right .info");

infoElems.forEach((infoElem) => {
  let paragraphs = infoElem.querySelectorAll("p");
  let paraIndex = 0;
  let isAnimating = false;
  document.querySelector("#main").addEventListener("click", function () {
    if (isAnimating) return;
    isAnimating = true;

    gsap.to(paragraphs[paraIndex], {
      top: "+=100%",
      ease: "Expo.easeInOut",
      duration: 0.5,
      onComplete: function () {
        gsap.set(this._targets[0], { top: "-100%" });
        isAnimating = false;
      },
    });

    paraIndex = paraIndex === paragraphs.length - 1 ? 0 : paraIndex + 1;

    gsap.to(paragraphs[paraIndex], {
      top: "+=100%",
      ease: "Expo.easeInOut",
      duration: 0.5,
      onComplete: function () {
        isAnimating = false;
      },
    });
  });
});

// right side image animation
let imageDiv = document.querySelector("#image-div");
let imageElems = document.querySelectorAll("#image-div img");
let imageIndex = 0;
let isImageAnimating = false;

scene.addEventListener("click", function () {
  if (isImageAnimating) return;
  isImageAnimating = true;

  let currentImage = imageElems[imageIndex];
  let nextImage = imageElems[(imageIndex + 1) % imageElems.length];

  gsap.to(currentImage, {
    top: "100%",
    ease: "Expo.easeInOut",
    duration: 0.5,
    onComplete: function () {
      gsap.set(this._targets[0], { top: "-100%" });
    },
  });

  gsap.set(nextImage, { top: "-100%" });

  gsap.to(nextImage, {
    top: 0,
    ease: "Expo.easeInOut",
    duration: 0.5,
    onComplete: function () {
      isImageAnimating = false;
      imageIndex = (imageIndex + 1) % imageElems.length;
    },
  });
});
