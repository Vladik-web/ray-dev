const swiper = new Swiper(".swiper-fig", {
  allowTouchMove: false,
  spaceBetween: 400,
  pagination: {
    el: ".line",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    0: { allowTouchMove: true, spaceBetween: 1000 },
    1439: { allowTouchMove: false },
  },
  on: {
    slideChange(swiper) {
      animateFadeOutBottom(swiper.$wrapperEl, ".slider__head div span", 200, 0);
    },
  },
});

const swiperContent = new Swiper(".swiper-content", {
  allowTouchMove: false,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  loop: true,
  speed: 700,
  watchSlidesProgress: true,
});

const swiperGall = new Swiper(".swiper-gallery", {
  allowTouchMove: false,
  slidesPerView: 4,

  speed: 700,
  loop: true,
  navigation: {
    nextEl: ".team__navigation .swiper-next",
    prevEl: ".team__navigation .swiper-prev",
  },
  pagination: {
    el: ".line--little",
    type: "progressbar",
  },
  slideToClickedSlide: true,
  thumbs: {
    swiper: swiperContent,
  },
  breakpoints: {
    0: { slidesPerView: 3, slideToClickedSlide: false, allowTouchMove: true },
    768: { slidesPerView: 4, allowTouchMove: false, slideToClickedSlide: true },
  },
});
