// CALLBACKS IN ASYNCHRONOUS PROGRAMMING --------------------------------------

// we need to change the textContent of every heading el to heading1, heading2.....
// and we also need to change the colors

// Selecting the elements
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// setTimeout
setTimeout(() => {
  heading1.textContent = "heading1";
  heading1.style.color = "violet";

  setTimeout(() => {
    heading2.textContent = "heading2";
    heading2.style.color = "purple";

    setTimeout(() => {
      heading3.textContent = "heading3";
      heading3.style.color = "red";

      setTimeout(() => {
        heading4.textContent = "heading4";
        heading4.style.color = "pink";

        setTimeout(() => {
          heading5.textContent = "heading5";
          heading5.style.color = "green";

          setTimeout(() => {
            heading6.textContent = "heading6";
            heading6.style.color = "blue";

            setTimeout(() => {
              heading7.textContent = "heading7";
              heading7.style.color = "brown";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Problems with the above code
// - These nested callbacks are very difficult to read and maintain.
