const link = document.querySelector(".create__link-big");
link?.addEventListener("mousemove", (e) => {
  link.style.boxShadow = `${e.offsetX / 5}px ${e.offsetY / 5}px 50px 0 #0048ff`;
});
link?.addEventListener("mouseleave", (e) => {
  link.style.boxShadow = `0 0 0 0 #0048ff`;
});
