// Function to display btns
export function displayBtns(btnsContainer, pages, activeIndex) {
  let btns = pages
    .map((_, index) => {
      return `<button class="page-btn" data-index="${index}">${
        index + 1
      }</button>`;
    })
    .join("");

  btnsContainer.innerHTML = btns;
}
