import { getElement } from "../src/getElement.js";

// Selecting the elements
const cart = getElement(".cart");
const toggleCartBtn = getElement(".toggle-cart-btn");
const cartCloseBtn = getElement(".cart-close-btn");
// console.log(cart)

// Event Listener on toggle cart btn
toggleCartBtn.addEventListener("click", function () {
  cart.classList.add("show");
});

// Event Listener for closing the cart btn
cartCloseBtn.addEventListener("click", function () {
  cart.classList.remove("show");
});

export function openCart() {
  cart.classList.add("show");
}
