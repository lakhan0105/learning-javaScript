// IMPORTING
import { fetchUsers } from "./src/01-fetchUsers.js";
import { displayUsers } from "./src/02-displayUsers.js";
import { paginate } from "./src/03-paginate.js";
import { displayBtns } from "./src/04-displayBtns.js";

// Selecting the elements
const pageTitle = document.querySelector(".page-title");
const btnsContainer = document.querySelector(".btns-container");

// Initialization
let index = 0;
let pages = [];

// URL
const URL = "https://api.github.com/users/john-smilga/followers?per_page=100";

// Function
function setUI() {
  displayUsers(pages[index]);
  displayBtns(btnsContainer, pages, index);
}

// Function to fetch and display user data
const start = async () => {
  const data = await fetchUsers(URL);
  pages = paginate(data);
  setUI();
  pageTitle.textContent = "Pagination";
};

// Event Listener on the btnsContainer
btnsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) {
    return;
  }
  if (e.target.classList.contains("page-btn")) {
    index = e.target.dataset.index;
  }

  setUI();
});

start();
