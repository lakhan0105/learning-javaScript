import { getElement } from "../src/getElement.js";
import { openCart } from "../cart/toggleCart.js";
import { getStorageItem, setStorageItem } from "../src/utils.js";
import { findProduct } from "../src/setup.js";
import { addToCartDOM } from "../cart/addToCartDOM.js";

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items-container");
const cartTotalDOM = getElement(".cart-items-total-price");

// set the cart to local storage
let cart = getStorageItem("cart");

// Function to add to cart
export function addToCart(id) {
  const item = cart.find((item) => item.id === id);

  // if nothing is present in the cart (local storage)
  if (!item) {
    let product = findProduct(id);
    console.log(product);

    // add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    console.log(cart);

    // add to cartDOM
    addToCartDOM(product);
  } else {
    // update cart
    // increase amount
    const amount = increaseAmt(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    console.log(items);

    const newAmount = items.find((value) => {
      return value.dataset.id === id;
    });
    console.log(newAmount);

    newAmount.textContent = amount;
    // console.log(item);
  }

  // more stuff comming up
  // add +1 to the cart count
  displayCartItemsCount();

  // calculate the car totals
  displayCartTotal();

  // set cart in local storage
  setStorageItem("cart", cart);
  openCart();
}

function displayCartItemsCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount);
  }, 0);

  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  const total = cart.reduce((acc, curr) => {
    return (acc += curr.price * curr.amount);
  }, 0);

  cartTotalDOM.textContent = `Total : $${total / 100}`;
}

// display all the cart items
function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

// Increase amount
function increaseAmt(id) {
  let newAmt;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmt = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmt };
    }
    return cartItem;
  });

  return newAmt;
}

// Decrease amount
function decreaseAmt(id) {
  let newAmt;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmt = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmt };
    }
    return cartItem;
  });

  return newAmt;
}

function removeItem(id) {
  cart = cart.filter((cartItem) => {
    cartItem.id !== id;
  });
}

function setupCartFunctionality() {
  cartItemsDOM.addEventListener("click", function (e) {
    const targetId = e.target.dataset.id;
    // remove
    if (e.target.classList.contains("cart-item-remove-btn")) {
      removeItem(targetId);
      e.target.parentElement.parentElement.remove();
    }

    // increase
    if (e.target.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmt(targetId);
      console.log(e.target.nextElementSibling);
      e.target.nextElementSibling.textContent = newAmount;
    }

    // decrease
    if (e.target.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmt(targetId);

      if (newAmount === 0) {
        removeItem(targetId);
        e.target.parentElement.parentElement.remove();
      } else {
        e.target.previousElementSibling.textContent = newAmount;
      }
    }

    // run these funcs regardless of clicking any btn
    displayCartItemsCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
}

// start function for running all these cart funcs in all the pages
function start() {
  // display cart items count
  displayCartItemsCount();

  // display total amount
  displayCartTotal();

  // add all cart items to the dom
  displayCartItemsDOM();

  // setup cart functionality
  setupCartFunctionality();

  // console.log(cart);
}

start();
