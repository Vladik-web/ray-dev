const menuWrapper = document.querySelector(".menu-wrapper");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const burgerMenu = document.querySelector(".burger-menu");
menuWrapper.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("animate");
  burgerMenu.classList.toggle("active");
  document.body.classList.toggle("overflow");
});
