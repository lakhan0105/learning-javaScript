// allows selecting the elements dynamically
// event propagation - order the events are fired
// event bubbling - When an event occurs on an element in the DOM, such as a click event on a button, that event doesn't just stay on the element itself. Instead, it "bubbles up" through its ancestors in the DOM tree, starting from the target element all the way up to the root of the document.
// e.stopPropagation() - stops the event bubbling
// event capturing -

// we are going to select the container and the list-item
const containerEl = document.querySelector(".container");
const listItem = document.querySelector(".list-items");

// add event listener for both of them
// get the currenttarget and target
containerEl.addEventListener("click", function (e) {
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
});

// do the same thing for the listitem
listItem.addEventListener("click", function (e) {
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
  if (e.target.classList.contains("link")) {
    console.log("you clicked on the link");
  }
});

// what will happen
// - if i will click on the link, the container as well as the list-itme will fire
// - but i did not add event listener to the actual link('a' element)
// - it is called as event bubbling
