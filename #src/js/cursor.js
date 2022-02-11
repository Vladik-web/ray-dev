const wrapp = document.querySelector(".create__wrapper");
const cursor = document.querySelector(".cursor");
wrapp.addEventListener("mousemove", (e) => {
  cursor.style.top = e.offsetY + "px";
  cursor.style.left = e.offsetX + "px";
});
