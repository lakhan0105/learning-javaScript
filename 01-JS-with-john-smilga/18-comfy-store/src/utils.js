// URLS
export const allProductsUrl =
  "https://course-api.com/javascript-store-products";

// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'

export const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

// get storage
export function getStorageItem(item) {
  let storageItem = localStorage.getItem(item);

  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }

  return storageItem; // this line is imp else u ill get undefined
}

// set storage
export function setStorageItem(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}
