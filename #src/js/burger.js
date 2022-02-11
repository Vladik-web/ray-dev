const menuWrapper = document.querySelector(".menu-wrapper");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const burgerMenu = document.querySelector(".burger-menu");
const links = document.querySelector(".burger-menu__list");
function checkPage() {
  if (hamburgerMenu.classList.contains("animate")) {
    scrollLock.disablePageScroll();
  } else {
    scrollLock.enablePageScroll();
  }
}
menuWrapper.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("animate");
  burgerMenu.classList.toggle("active");
  checkPage();
});
links.addEventListener("click", (event) => {
  const target = event.target.closest("a");
  if (target) {
    hamburgerMenu.classList.remove("animate");
    burgerMenu.classList.remove("active");
    checkPage();
  } else return;
});
