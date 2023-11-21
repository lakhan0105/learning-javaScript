import { showDrinks } from "./03-showDrinks.js";

// Selecting the elements
const form = document.querySelector("form");
const userInput = document.querySelector(".user-input");

form.addEventListener("input", function (e) {
  const userInputVal = userInput.value;
  console.log(userInputVal);

  URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInputVal}`;
  showDrinks(URL);
});
