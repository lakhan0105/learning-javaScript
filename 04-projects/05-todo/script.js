// Selecting the elements
const inputEl = document.querySelector(".input");
const todoLisitEl = document.querySelector(".todos-list");

// Initilization
let count = 0;

// Set up the local storage
const todoData = [];
const existingData = JSON.parse(localStorage.getItem("todoData") || []);

// // load all the content when the page is loaded
// existingData.forEach((obj) => {
//   // create and add new todo element in todo-list element
//   const el = document.createElement("li");
//   el.classList.add("todo");

//   el.innerHTML = `
//     <input type="checkbox" data-id="${obj.dataId}">
//     <label for="${obj.dataId}">${obj.todoText}</label>`;

//   todoLisitEl.appendChild(el);

//   const checkboxEl = document.querySelector("input[type=checkbox]");
//   console.log(checkboxEl);

//   checkboxEl.addEventListener("mousedown", function (e) {
//     const isChecked = e.currentTarget.checked;
//     const labelEl = e.currentTarget.nextElementSibling;

//     // capture the dataId and existingData
//     const dataId = e.currentTarget.dataset.id;
//     const existingData = JSON.parse(localStorage.getItem("todoData")) || [];

//     if (!isChecked) {
//       // code when the user checks the task
//       existingData[dataId].todoStatus = true; // change the todoStatus to true
//       labelEl.style.textDecoration = "line-through"; // add line-through for the label el
//     } else {
//       // code when the user has already checked the todo task
//       existingData[dataId].todoStatus = false; // change the todoStatus to false
//       labelEl.style.textDecoration = "none"; // remove line-through
//     }

//     // update the localStorage
//     localStorage.setItem("todoData", JSON.stringify(existingData));
//   });
// });

// After entering the input, when enter key is pressed a new todo element is created.
// Event Listener when the enter key is pressed in the inputEl
inputEl.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // capture input value in a variable
    const inputValue = inputEl.value;

    // create and add new todo element in todo-list element
    const el = document.createElement("li");
    el.classList.add("todo");

    el.innerHTML = ` 
    <input type="checkbox" data-id="${count}">
    <label for="${count}">${inputValue}</label>`;

    todoLisitEl.appendChild(el);

    // create a object to store the todo data
    const obj = { todoText: inputValue, todoStatus: false, dataId: count };
    todoData.push(obj);
    localStorage.setItem("todoData", JSON.stringify(todoData));

    // clear the inputEl value
    inputEl.value = "";
    count++;

    // Selecting the elements
    const checkboxEl = el.querySelector("input[type=checkbox]");

    // Event Listener on checkboxEl
    checkboxEl.addEventListener("mousedown", function (e) {
      const isChecked = e.currentTarget.checked;
      const labelEl = e.currentTarget.nextElementSibling;

      // capture the dataId and existingData
      const dataId = e.currentTarget.dataset.id;
      const existingData = JSON.parse(localStorage.getItem("todoData")) || [];

      if (!isChecked) {
        // code when the user checks the task
        existingData[dataId].todoStatus = true; // change the todoStatus to true
        labelEl.style.textDecoration = "line-through"; // add line-through for the label el
      } else {
        // code when the user has already checked the todo task
        existingData[dataId].todoStatus = false; // change the todoStatus to false
        labelEl.style.textDecoration = "none"; // remove line-through
      }

      // update the localStorage
      localStorage.setItem("todoData", JSON.stringify(existingData));
    });
  }
});
