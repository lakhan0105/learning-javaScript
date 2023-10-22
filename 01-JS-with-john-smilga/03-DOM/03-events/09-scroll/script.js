// Scroll event
// - It gives us the scrolled value from the top of the el/document in px.
// - we can use the scroll event on element or document
// - we can only use if the screen is scrollable

window.addEventListener("scroll", function () {
  console.log(window.scrollX, "px in the X direction");
  console.log(window.scrollY, "px in the Y direction");
});

// WIDTH, HEIGHT, GetBoundingClientRect()------------------------------------------------------------------------
// [DOUBT]
/*
innerWidth - The read-only Window property, returns the inner width of the window in px 
innerHeight - The read-only Window property, returns the inner height of the window in px

element.GetBoundingClientRect()
- this method returns a DOMRect object providing info abt the size of an el and its position relative to the viewport
*/
