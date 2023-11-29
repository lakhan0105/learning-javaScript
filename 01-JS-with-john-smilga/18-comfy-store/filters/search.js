// IMPORTS
import { getElement } from "../src/getElement.js";
import { displayProducts } from "../src/displayProducts.js";

export function search(store) {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");

  form.addEventListener("keyup", function () {
    const value = nameInput.value;

    if (value) {
      const newStore = store.filter((product) => {
        let { name: productName } = product;
        productName.toLowerCase();
        return productName.includes(value);
      });
      displayProducts(newStore, getElement(".products-container"));

      // when there is no match for the search input
      if (newStore.length < 1) {
        const productsCont = getElement(".products-container");
        productsCont.innerHTML = "Sorry, no results found";
      }
    } else {
      displayProducts(store, getElement(".products-container"));
    }
  });
}
