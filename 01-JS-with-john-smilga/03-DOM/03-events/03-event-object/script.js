// EVENT OBJECT
// - info about the triggered event
// - takes an arguement, e - event
// - e.currentTarget
// - e.type
// - e.preventDefault() - prevents default behaviour(useful with submitting the form)

// e.preventDefault()
// select the link
const linkEl = document.querySelector(".link");
// prevent the default behaviuor of the link (jumping to the top of the page when click)
linkEl.addEventListener("click", function (e) {
  e.preventDefault();
});

// e.currentTarget()
// selecting the element
const headingEl = document.querySelector("h2");
headingEl.addEventListener("click", function (e) {
  e.currentTarget.classList.add("red"); // adds the .red class
  console.log(e.type); // click
});

// CURRENTTARGET VS TARGET --------------------------------------------------------------------------------------
// - currentTarget - always refers to the el to which the event handler has been attached to
// - target - identifies the el on which the event has occured
const btns = document.querySelectorAll(".btn");

// currentTarget
// gives us the btn el 
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget);
  });
});

// target
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(e.target);
  });
});

