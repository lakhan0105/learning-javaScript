export function setDrink(container) {
  container.addEventListener("click", function (e) {
    // e.preventDefault();
    const parent = e.target.parentElement.parentElement;
    const id = parent.dataset.id;

    localStorage.setItem("drink", id);
  });
}
