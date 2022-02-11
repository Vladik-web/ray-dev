gsap.registerPlugin(ScrollTrigger);

const scrollTriggerInstance = (el, animation) => {
  return ScrollTrigger.create({
    animation,
    trigger: el,
    start: "top bottom",
  });
};
const animateFadeOutBottom = (el, items, height, time) => {
  const tl = gsap.timeline({
    duration: time ? time : 0.5,
    ease: "easeOut",
  });
  gsap.set(items, {});
  tl.fromTo(
    items,
    {
      y: height ? height : 70,
    },
    { y: 0, stagger: 0.1 }
  );
  scrollTriggerInstance(el, tl);
  return tl;
};
animateFadeOutBottom(".mission", ".mission .title div *");
animateFadeOutBottom(".about-us", ".about-us .title div *");
animateFadeOutBottom(".product", ".product .title div *");
animateFadeOutBottom(".applying", ".applying .title div *");
animateFadeOutBottom(".applying", ".applying__number span");
animateFadeOutBottom(".method__text-big", ".method__text-big span", 184);
animateFadeOutBottom(".swiper-slide-active", ".slider__head div *", 200, 0);

/* Плавный скролл к якорям */
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
