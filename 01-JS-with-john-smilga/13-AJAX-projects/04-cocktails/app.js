// Importing
import { showDrinks } from "./src/03-showDrinks.js";
import "./src/04-searchDrinks.js";

// URL
let URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", function () {
  showDrinks(URL);
});
