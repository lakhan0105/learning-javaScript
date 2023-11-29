// IMPORT
import { getElement } from "../src/getElement.js";
const cartItemsDOM = getElement(".cart-items-container");

export function addToCartDOM({ id, name, price, image, amount }) {
  const article = document.createElement("article");
  article.classList.add("cart-item");
  article.setAttribute("data-id", id);

  article.innerHTML = `
                <div class="cart-img-container">
                    <img class="cart-img" src="${image}" alt="not found">
                </div>

                <div class="cart-item-info">
                    <p class="cart-item-name">${name}</p>
                    <p class="cart-item-price">$${price}</p>
                    <button class="cart-item-remove-btn" data-id="${id}">remove</button>
                </div>

                <div>
                    <button class="cart-item-increase-btn modify-items-amt" data-id="${id}">
                        +
                    </button>
                    <p class="cart-item-amount" data-id="${id}">
                        ${amount}
                    </p>
                    <button class="cart-item-decrease-btn modify-items-amt" data-id="${id}">
                        -
                    </button>
                </div>`;

  cartItemsDOM.appendChild(article);
}
