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
});

const swiperContent = new Swiper(".swiper-content", {
  /*  allowTouchMove: false, */
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  freeMode: true,
  watchSlidesProgress: true,
});

const swiperGall = new Swiper(".swiper-gallery", {
  /*  allowTouchMove: false, */
  effect: "cards",
  grabCursor: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".team__navigation .swiper-next",
    prevEl: ".team__navigation .swiper-prev",
  },
  pagination: {
    el: ".line--little",
    type: "progressbar",
  },

  thumbs: {
    swiper: swiperContent,
  },
  on: {
    click(swiper) {
      swiper.slideTo(swiper.clickedIndex);
    },
  },
});
