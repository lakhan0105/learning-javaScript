// Selecting the elements
const hamburgerEl = document.querySelector(".hamburger");
const linksListEl = document.querySelector(".links-container");

// Event Listener
hamburgerEl.addEventListener("click", function () {
  linksListEl.classList.toggle("hide");
});
