// JavaScript for random simple numbers
const simpColors = ["blue", "orange", "green", "red"];

// Selecting the elements
const btnEl = document.querySelector(".btn");
const mainContainerEl = document.querySelector(".main-container");
const colorNameEl = document.querySelector(".color-name");

// function to generate random numbers
function genRand() {
  return Math.floor(Math.random() * simpColors.length);
}

// Function to change the colors
function updateColor() {
  const randColor = simpColors[genRand()];
  mainContainerEl.style.backgroundColor = randColor;
  colorNameEl.textContent = randColor;
}

btnEl.addEventListener("click", function () {
  updateColor();
});
