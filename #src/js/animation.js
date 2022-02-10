gsap.config({
  nullTargetWarn: false,
});
gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

const defs = {
  duration: 0.5,
};

const scrollTriggerInstance = (el, animation) => {
  return ScrollTrigger.create({
    animation,
    trigger: el,
    start: "top bottom",
  });
};
const splitText = (el, type) => {
  return new SplitText(el, type);
};

const animateLinkOnHover = () => {
  const allLinks = document.querySelectorAll(
    ".social__item, .nav__link, .contacts__link"
  );

  allLinks.forEach((link) => {
    link.setAttribute("data-hover", link.textContent);
  });
};
const animateSplittedText = (el, text) => {
  const spText = splitText(text, { type: "lines", linesClass: "line" });
  const tl = gsap.timeline(defs);

  tl.fromTo(
    spText.lines,
    { yPercent: 100, rotationX: 80, opacity: 0 },
    { yPercent: 0, rotationX: 0, opacity: 1, stagger: 0.1 }
  );
  scrollTriggerInstance(el, tl);
};
const animateActiveItem = (el, items) => {
  gsap.to(items, { opacity: 0.5 });
  gsap.to(el, { opacity: 1 });
};

const animateFadeOutBottomS = (el, items) => {
  const tl = gsap.timeline({ duration: 0.2 });
  gsap.set(items, { opacity: 0 });
  tl.fromTo(
    items,
    { yPercent: 30, opacity: 0 },
    { yPercent: 0, opacity: 1, stagger: 0.1 }
  );
  scrollTriggerInstance(el, tl);
  return tl;
};
const animateFadeOutRt = (el, items) => {
  const tl = gsap.timeline(defs);
  gsap.set(items, { opacity: 0, xPercent: 30 });
  tl.to(items, { opacity: 1, xPercent: 0, stagger: 0.1 });

  scrollTriggerInstance(el, tl);
};
const animateOpacity = (el, items) => {
  const tl = gsap.timeline(defs);
  tl.fromTo(items, { opacity: 0 }, { opacity: 1, stagger: 0.1 });
  scrollTriggerInstance(el, tl);
};
const animateOnScroll = (container, el, el2) => {
  const items = Array.from(container.children).filter(
    (el) =>
      !el.classList.contains("pin-spacer") &&
      !el.classList.contains("intro--about")
  );

  return ScrollTrigger.matchMedia({
    "(min-width:1024px)"() {
      gsap.set(items, { opacity: 0 });
      const tl = gsap.timeline();
      const scrollInstance = ScrollTrigger.create({
        trigger: container,
        scrub: 1,
        start: "top top",
        pinSpacing: true,
        end: "+=300",
        pin: true,
        animation: tl,
      });

      tl.to(el, { yPercent: -100, duration: 0.5 }).to(
        items,
        { opacity: 1 },
        "-=0.5"
      );

      return scrollInstance;
    },
    "(max-width:1023.98px)"() {
      gsap.to(container, { clearProps: "all" });
      gsap.set(items, { opacity: 1 });
    },
  });
};

const parallax = ($event) => {
  const wrapper = $event.currentTarget;
  const el = Array.from(wrapper.children).find((el) => el);

  const e = $event;

  const mouseX = e.pageX - wrapper.offsetLeft;
  const mouseY = e.pageY - wrapper.offsetTop;

  const percX = ((mouseX - wrapper.offsetWidth) / 2 / wrapper.offsetWidth) * 50;
  const percY =
    ((mouseY - wrapper.offsetHeight) / 2 / wrapper.offsetHeight) * 30;

  gsap.to(el, { x: percX, y: percY, scale: 0.9 });
  gsap.to(el.children, { x: percX, y: percY });
};
const resetParallax = ($event) => {
  const wrapper = $event.currentTarget;
  const el = Array.from(wrapper.children).find((el) => el);
  gsap.to(el, { x: 0, y: 0, scale: 1 });
  gsap.to(el.children, { x: 0, y: 0 });
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
    { y: 0, stagger: 0.2 }
  );
  scrollTriggerInstance(el, tl);
  return tl;
};
const animateSlider = (el, items) => {
  const tl = gsap.timeline({
    duration: 0,
    ease: "easeOut",
  });
  gsap.set(items, {});
  tl.fromTo(
    items,
    {
      y: 70,
      width: 100,
      scale: 0.9,
    },
    { y: 0, scale: 1, stagger: 0.2 }
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
