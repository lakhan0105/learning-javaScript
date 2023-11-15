// CB HELL - DOM - EXAMPLE
// - u need to change the color of the headings one by one

// Selecting the elements
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  setTimeout(() => {
    heading1.style.color = "red";

    setTimeout(() => {
      heading2.style.color = "green";

      setTimeout(() => {
        heading3.style.color = "blue";
      }, 1000);
    }, 1000);
  }, 1000);
});
