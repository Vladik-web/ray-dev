/* let wrapper = document.querySelector(".ticker"),
  marquee = document.querySelector(".ticker"),
  wrapperWidth = wrapper.offsetWidth,
  marqueeWidth = marquee.scrollWidth;

function move() {
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
let interval = setInterval(move, 10);
 */

function initMarqueeText() {
  const marquees = document.querySelectorAll(".marquee");
  marquees.forEach((marquee) => {
    const itemEls = marquee.querySelectorAll(".item");
    itemEls.forEach((itemEl) => {
      const word = itemEl.getAttribute("data-word");
      const number = itemEl.getAttribute("data-number");
      for (let i = 0; i < word.length; i++) {
        const letterEl = document.createElement("span");
        letterEl.className = "letter";
        letterEl.innerHTML = word[i];
        itemEl.appendChild(letterEl);
      }
      const numberEl = document.createElement("span");
      numberEl.classList.add("number", "letter");
      numberEl.innerHTML = `<p>${number}</p><p>X</p>`;
      itemEl.appendChild(numberEl);
    });
  });
}

//initMarqueeText();
