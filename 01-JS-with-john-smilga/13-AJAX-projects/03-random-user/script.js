import { getElement } from "./utils/getElement.js";
import { getUser } from "./utils/getUser.js";
import { displayUser } from "./utils/displayUser.js";

// Selecting the elements
const randomUsrBtn = getElement(".random-user-btn");

// Function to fetch and display the data
const showUser = async () => {
  // get user data
  const personData = await getUser();

  // display users
  displayUser(personData);
};

// Event Listeners
window.addEventListener("DOMContentLoaded", showUser);
randomUsrBtn.addEventListener("click", showUser);
