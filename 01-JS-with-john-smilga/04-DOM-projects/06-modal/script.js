// Selecting the elements
const btns = document.querySelectorAll(".btn");
const modalContainerEl = document.querySelector(".modal-container");
const modalCard = document.querySelector(".modal-card");

// Event Listener
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const elClass = e.currentTarget.classList;

    if (elClass.contains("open-btn")) {
      modalContainerEl.classList.remove("hide");
    } else if (elClass.contains("close-btn")) {
      modalContainerEl.classList.add("hide");
    }
  });
});
