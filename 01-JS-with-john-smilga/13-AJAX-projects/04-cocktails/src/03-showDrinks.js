import { fetchDrinks } from "./01-fetchDrinks.js";
import { displayDrinks } from "./02-displayDrinks.js";
import { setDrink } from "./05-setDrink.js";

// present drinks
export const showDrinks = async (url) => {
  // fetch drinks
  const data = await fetchDrinks(url);

  // display drinks
  const container = await displayDrinks(data);
  if (container) {
    setDrink(container);
  } else {
    console.log("nothing returned");
  }
};

