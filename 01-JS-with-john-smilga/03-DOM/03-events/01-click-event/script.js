// CLICK EVENT -------------------------------------------------------------------------------------------------
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("you clicked on the btn");
  btn.classList.add("red");
});

// FUNCTION REFERNECE -------------------------------------------------------------------------------------------
// - we do not need to invoke the function inside the eventListener.
// - we can only give the function name/ we can directly write an anynomous function inside it

// MOUSE EVENTS -------------------------------------------------------------------------------------------------
// click - fires when full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - mouse is moved on an element
// mouseleave - mouse is moved out of the element

// order
// mousedown
// mouseup
// click
