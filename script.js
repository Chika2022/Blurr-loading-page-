var loadTxt = document.querySelector(".loading-txt");
var bg = document.querySelector(".bg");

var load = 0;
var start = setInterval(blurr, 30);
function blurr() {
  load++;

  if (load > 99) {
    clearInterval(start);
  }

  loadTxt.innerText = `${load}%`;
  loadTxt.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
