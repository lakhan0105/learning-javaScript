import { displayProducts } from "../src/displayProducts.js";
import { getElement } from "../src/getElement.js";

export function price(store) {
  const priceRange = getElement(".price-range");
  const priceValue = getElement(".price-value");

  // setup filter
  let maxPrice = store.map((product) => product.price);
  maxPrice = Math.max(...maxPrice);

  maxPrice = Math.ceil(maxPrice / 100);
  priceRange.value = maxPrice; // set the slider to maxPrice value
  priceRange.max = maxPrice;
  priceRange.min = 0;
  priceValue.textContent = `Value:$${maxPrice}`;

  priceRange.addEventListener("input", function (e) {
    const value = parseInt(priceRange.value); // convert to number
    priceValue.textContent = `Value:$${value}`;

    let newStore = store.filter((product) => {
      return product.price / 100 <= value;
    });

    displayProducts(newStore, getElement(".products-container"));

    // if no match found
    if (newStore.length < 1) {
      const productsContainer = getElement(".products-container");
      productsContainer.innerHTML = "Sorry, no match found";
    }
  });
  console.log(maxPrice);
}
