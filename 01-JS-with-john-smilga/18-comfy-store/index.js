// GLOBAL IMPORTS
import "./src/toggleSidebar.js";
import "./cart/toggleCart.js";

// specific imports
import { getElement } from "./src/getElement.js";
import { fetchProducts } from "./src/fetchProducts.js";
import { setupStore, store } from "./src/setup.js";
import { displayProducts } from "./src/displayProducts.js";

// init function
const init = async () => {
  // fetch products
  const products = await fetchProducts();

  // setup store
  setupStore(products);

  // featured products
  const featured = store.filter((item) => {
    return item.featured === true;
  });

  displayProducts(featured, getElement(".featured-center"));
};

window.addEventListener("DOMContentLoaded", init);
