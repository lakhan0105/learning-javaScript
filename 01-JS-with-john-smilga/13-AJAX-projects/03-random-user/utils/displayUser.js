// import
import { getElement } from "./getElement.js";

// Selecting the elements
const img = getElement(".card-img");
const title = getElement(".card-title");
const value = getElement(".card-value");
const icons = [...document.querySelectorAll(".icon")];

// Function to display user
export const displayUser = (personData) => {
  // default data
  img.src = personData.img;
  title.textContent = `My name is`;
  value.textContent = personData.name;

  // iterate over the btns(icons)
  icons.forEach((icon) => {
    icon.addEventListener("click", function (e) {
      const label = e.currentTarget.dataset.label;
      title.textContent = `My ${label} is`;
      value.textContent = personData[label];
    });
  });
};
