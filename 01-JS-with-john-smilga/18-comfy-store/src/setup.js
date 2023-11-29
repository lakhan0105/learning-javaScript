// IMPORT
import { getStorageItem, setStorageItem } from "./utils.js";

let store = getStorageItem("store");

function setupStore(products) {
  store = products.map((item) => {
    // Destructuring
    const {
      id,
      fields: { colors, company, featured, image: img, name, price },
    } = item;
    const image = img[0].thumbnails.small.url;

    return { id, colors, company, featured, image, name, price };
  });

  setStorageItem("store", store);
}

export const findProduct = function (id) {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore };
