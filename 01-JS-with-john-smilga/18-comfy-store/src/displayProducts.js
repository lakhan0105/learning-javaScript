// IMPORTING
import { openCart } from "../cart/toggleCart.js";
import { addToCart } from "../cart/setUpCart.js";

// Function to display the products
// - Takes two args, the products array, el selection where u want them to display.
export function displayProducts(array, selection, filters) {
  const mapped = array
    .map((item) => {
      // Destructuring
      const { id, company, name, price, image, colors } = item;

      return `<article class="featured-product">
                    <div class="featured-product-img-container">
                        <img src="${image}" alt="${image}not foound">
                    </div>
                    <div class="product-icons">
                        <a href="product.html?id=${id}" class="product-icon">open</a>
                        <button class="product-cart-btn product-icon" data-id=${id}>add to cart</button>
                    </div>
                    <footer>
                        <p class="product-name">${name}</p>
                        <p class="product-price">$${price / 100}</p>
                    </footer>
            </article>`;
    })
    .join("");

  selection.innerHTML = mapped;

  if (filters) return;
  selection.addEventListener("click", function (e) {
    // pass the id into the addToCart()
    addToCart(e.target.dataset.id);
    openCart();
  });
  return mapped;
}
