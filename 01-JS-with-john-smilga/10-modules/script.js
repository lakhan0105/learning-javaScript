// MODULES
// - Allows us to split our code into smaller files
// - Share code accross apps
// - Same as react

// When the user clicks on the btn, the people data is displayed on the page

// IMPORTING FROM data.js
import { people } from "./utils/data.js";
import { showPeople } from "./utils/showpeople.js";
import { getElement } from "./utils/getElement.js";

// SELECTING THE ELEMENTS
const showBtn = getElement(".show-btn");
const container = getElement(".container");

// EVENT LISTENER
showBtn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});

// PROBLEMS IN THIS CODE WITHOUT USING MODULES
// - we have global names like people variable, which cannot be created again if we want to
// - hard to navigate through the file

// STEPS
// - create a separate folder (u can also create sep file)
// - i created utils > data.js and placed the people array in it
// - we need to export the people array
// - there are 2 ways -> named export and default export
// - we need to import -> import { people } from "./utils/data";
// - as soon as we type it, we get error: cannot use import stmt outside module
// - so we add type="module" attribute in the script tag og HTML doc
// - after that we get another error, to fix that we need to mention the .js while importing
// - import { people } from "./utils/data.js";
