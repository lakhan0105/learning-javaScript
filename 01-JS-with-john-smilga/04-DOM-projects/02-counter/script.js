// Selecting the elements
const countEl = document.querySelector(".count");
const btns = document.querySelectorAll(".btn");

// Initialisation
let count = 0;

// Function to update the count text on the screen
function updateCount() {
  countEl.textContent = count;
}

// Event Listener for buttons element
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const elClass = e.currentTarget.classList;
    if (elClass.contains("decrease-btn")) {
      count--;
      updateCount();
    } else if (elClass.contains("increase-btn")) {
      count++;
      updateCount();
    } else if (elClass.contains("reset-btn")) {
      count = 0;
      updateCount();
    }
  });
});
