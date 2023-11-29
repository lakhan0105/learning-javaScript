import { displayProducts } from "../src/displayProducts.js";
import { getElement } from "../src/getElement.js";

export function companies(store) {
  // CREATE AN ARRAY CONTAINING THE COMPANY NAMES
  const companiesArray = [
    "all",
    ...new Set(store.map((product) => product.company)),
  ];

  // DISPLAY FILTER BUTTONS
  const mappedFilterBtns = companiesArray
    .map((btn) => {
      return `<button class="filter-btn" data-id="${btn}">${btn}</button>`;
    })
    .join("");
  const filterBtnsContainer = getElement(".filter-btns-container");
  filterBtnsContainer.innerHTML = mappedFilterBtns;

  // forEach filterBtn
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener("click", function (e) {
      const btnId = e.currentTarget.dataset.id;
      const filteredItems = store.filter((item) => {
        if (item.company === btnId) {
          return item;
        }
      });

      // Display the products
      if (btnId === "all") {
        displayProducts(store, getElement(".products-container"), true);
      } else {
        displayProducts(filteredItems, getElement(".products-container"), true);
      }
    });
  });
}
