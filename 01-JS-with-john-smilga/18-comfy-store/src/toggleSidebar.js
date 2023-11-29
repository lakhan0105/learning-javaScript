import { getElement } from "./getElement.js";

const sidebar = getElement(".sidebar");
const sidebarCloseBtn = getElement(".sidebar-close-btn");
const hamburgerEl = getElement(".hamburger");

// Event Listener for showing the sidebar
hamburgerEl.addEventListener("click", function () {
  sidebar.classList.add("show");
});

// Event Listener for closing the sidebar
sidebarCloseBtn.addEventListener("click", function () {
  sidebar.classList.remove("show");
});
