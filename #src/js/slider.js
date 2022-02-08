const swiper = new Swiper(".swiper", {
  allowTouchMove: false,
  spaceBetween: 400,
  pagination: {
    el: ".line",
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
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
