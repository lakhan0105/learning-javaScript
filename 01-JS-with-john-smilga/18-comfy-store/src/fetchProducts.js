// IMPORTING
import "./getElement.js";
import { allProductsUrl } from "./utils.js";

// Function to fetch products.
export const fetchProducts = async () => {
  const resp = await fetch(allProductsUrl).catch((err) => {
    console.log(err);
  });

  if (resp) {
    return resp.json();
  }

  //   return resp;
};
