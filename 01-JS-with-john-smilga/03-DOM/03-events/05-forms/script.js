// To use submit event listener
// - select the els
// - add eventy listener for the form el
// - e.preventDefault();

// select the elements
const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");

// Add event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted");
  console.log(name.value);
  console.log(password.value);
});



