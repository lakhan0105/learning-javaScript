// GLOBAL IMPORTS
import "../src/getElement.js";
import "../src/toggleSidebar.js";
import "../cart/toggleCart.js";

// SPECIFIC IMPORT
import { setupStore, store } from "../src/setup.js";
import { displayProducts } from "../src/displayProducts.js";
import { getElement } from "../src/getElement.js";

// FILTER IMPORTS
import { companies } from "../filters/companies.js";
import { price } from "../filters/price.js";
import { search } from "../filters/search.js";
import { fetchProducts } from "../src/fetchProducts.js";

const init = async () => {
  // Selecting the load element
  const loadingEl = getElement(".page-loading");

  // if there are no products stored in local storage(if we try to access productspage directly)
  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  displayProducts(store, getElement(".products-container")); // display the products on the page.

  // search filter
  search(store);
  // btn filter
  companies(store);
  // price filter
  price(store);

  loadingEl.style.display = "none"; // remove the loadingEl after loading the products.
};

init();
