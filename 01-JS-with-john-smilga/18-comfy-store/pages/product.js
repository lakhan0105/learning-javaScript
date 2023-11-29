// GLOBAL IMPORTS
import "../src/getElement.js";
import "../src/toggleSidebar.js";
import "../cart/toggleCart.js";

// SPECIFIC IMPORTS
import { getElement } from "../src/getElement.js";
import { singleProductUrl } from "../src/utils.js";
import { addToCart } from "../cart/setUpCart.js";

// Selecting the elements
const loadingEl = getElement(".page-loading");
const singleProductCenter = getElement(".single-product-center");
const pageHeroTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtnDOM = getElement(".addToCartBtn");

let productID;

window.addEventListener("DOMContentLoaded", async function () {
  const urlId = window.location.search;
  try {
    const resp = await fetch(`${singleProductUrl}${urlId}`);
    if (resp.status >= 200 && resp.status <= 299) {
      const product = await resp.json();

      // Destructure the data
      const { id, fields } = product;
      productID = id;

      const { name, company, price, colors, description: desc } = fields;
      const image = fields.image[0].thumbnails.large.url;

      // set
      document.title = `${name.toUpperCase()} | Comfy`;
      pageHeroTitleDOM.textContent += name;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = company;
      priceDOM.textContent = `$${price / 100}`;
      descDOM.textContent = desc;

      // colors
      colors.forEach((color) => {
        const span = document.createElement("span");
        span.classList.add("product-color");
        span.style.background = color;

        colorsDOM.append(span);
        console.log(span);
      });

      //   console.log(image);

      console.log(product);
    } else {
      // if something is wrong with the id
      console.log(resp.status, resp.statusText, "product does not exists");
      singleProductCenter.innerHTML = `
      <p>Sorry, something went wrong</p>
      <a href="./index.html">back home</a>`;
    }
  } catch (err) {
    // network error
    console.log(err);
  }

  loadingEl.style.display = "none";
});

// Event listener
cartBtnDOM.addEventListener("click", function () {
  addToCart(productID);
});
