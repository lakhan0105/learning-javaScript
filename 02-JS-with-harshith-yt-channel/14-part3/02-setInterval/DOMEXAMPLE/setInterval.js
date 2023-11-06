// Question
// we need to stop changing the bg color when the btn is clicked

// Initialisation
const colorsArray = ["orange", "red", "green", "blue"];
let i = 0;

// Selecting the elements
const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".btn");

// setInterval()
const id = setInterval(() => {
  if (i < colorsArray.length) {
    bodyEl.style.backgroundColor = colorsArray[i];
    i++;
  }

  // set i=0, when reached last color in colrsArray
  if (i === colorsArray.length) {
    i = 0;
  }
}, 1000);

// Event Listener
btnEl.addEventListener("click", function () {
  clearInterval(id);
});
