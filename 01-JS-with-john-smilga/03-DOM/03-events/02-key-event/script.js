// KEY EVENTS
// keypress - when the key is pressed
// keydown - when key is down
// keyup - when key is up

const nameInput = document.querySelector("#name");

// keypress
nameInput.addEventListener("keypress", function () {
  console.log("key is pressed");
});

// keydown
nameInput.addEventListener("keydown", function () {
  console.log("key down");
});

// keyup
nameInput.addEventListener("keyup", function () {
  console.log("keyup");
});

// order
// keydown
// keypress
// keyup

// order if u press alt btn
// keydown
// keyup
