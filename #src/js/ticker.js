let wrapper = document.querySelector(".ticker"),
  marquee = document.querySelector(".ticker__inner"),
  wrapperWidth = wrapper.offsetWidth,
  marqueeWidth = marquee.scrollWidth;

function move1() {
  let currentTX = getComputedStyle(marquee).transform.split(",");
  if (currentTX[4] === undefined) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }
  if (-currentTX >= marqueeWidth) {
    marquee.style.transform = "translateX(" + wrapperWidth + "px)";
  } else {
    marquee.style.transform = "translateX(" + currentTX + "px)";
  }
}
let interval = setInterval(move1, 0.2);

let marqueeLast = document.querySelector(".ticker-last__head"),
  marqueeWidthLast = marqueeLast.scrollWidth;

function move2() {
  let currentTX = getComputedStyle(marqueeLast).transform.split(",");
  if (currentTX[4] === undefined) {
    currentTX = -1;
  } else {
    currentTX = parseFloat(currentTX[4]) - 1;
  }
  if (-currentTX >= marqueeWidthLast) {
    marqueeLast.style.transform = "translateX(" + wrapperWidth + "px)";
  } else {
    marqueeLast.style.transform = "translateX(" + currentTX + "px)";
  }
}
let intervalLas = setInterval(move2, 0.2);
