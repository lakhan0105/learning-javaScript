// import
import { fetchDrinks } from "./01-fetchDrinks.js";
import { displaySingleDrink } from "./07-displaySingleDrink.js";

// Fetch and display single drink here

const singleDrink = async () => {
  console.log("hello");
  const id = localStorage.getItem("drink");

  if (!id) {
    window.location.replace("index.html");
  } else {
    // fetch single drink
    const drink = await fetchDrinks(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    // display single drink
    displaySingleDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", function (e) {
  singleDrink();
});
