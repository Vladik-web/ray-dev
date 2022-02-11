//this.scrollY + cordFixed[index].top >= cordOnce[index]
const cordOnce = [],
  cordFixed = [];

const onceMass = [...document.querySelectorAll(".fixed-link-once")];
const cordFixedMass = [
  ...document.querySelectorAll(".fixed-link:not(.fixed-link-once)"),
];
function setCoords() {
  onceMass.forEach((item) => {
    let pos = item.getBoundingClientRect();
    cordOnce.push(pos.top + window.pageYOffset);
  });
  cordFixedMass.forEach((item) =>
    cordFixed.push(item.getBoundingClientRect().top)
  );
}
setCoords();
check();
function check() {
  if (window.innerWidth > 767) {
    onceMass.forEach((item) => {
      item.style.display = "none";
    });
    window.addEventListener("scroll", function () {
      for (let i = 0; i < onceMass.length; i++) {
        if (this.scrollY + cordFixed[i] > cordOnce[i]) {
          onceMass[i].style.display = "block";
          cordFixedMass[i].style.display = "none";
        } else if (this.scrollY + cordFixed[i] < cordOnce[i]) {
          onceMass[i].style.display = "none";
          cordFixedMass[i].style.display = "block";
        }
      }
    });
  } else return;
}
