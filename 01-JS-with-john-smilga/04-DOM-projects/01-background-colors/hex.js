// JS for hex colors
const hexArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let hexColor;

// Selecting the elements
const btnEl = document.querySelector(".btn");
const mainContainerEl = document.querySelector(".main-container");
const colorNameEl = document.querySelector(".color-name");

// Function to generate random number
function genRand() {
  return Math.floor(Math.random() * hexArray.length);
}

btnEl.addEventListener("click", function () {
  hexColor = "#"; // Reset the hexColor to "#"
  for (let i = 0; i < 6; i++) {
    hexColor += hexArray[genRand()];
  }
  mainContainerEl.style.backgroundColor = hexColor;
  colorNameEl.textContent = hexColor;
});
