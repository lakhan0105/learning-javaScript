// load event
// - fired when the whole page has loaded, including all dependent resource as stylesheets, imgs.
// - This is in contrast to DOMContentLoaded

window.addEventListener("load", function () {
  console.log("Hello after loading everything on the page");
});

// slow the network
// see that the console.log() is printed only after loading the other components on the screen
