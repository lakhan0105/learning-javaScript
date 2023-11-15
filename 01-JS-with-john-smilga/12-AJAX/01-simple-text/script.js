// to interact with the server
// we need to create an instance of the constructor function

// XMLHttpRequest() has some methods and properties
// - XMLHttpRequest.open() method
// - XMLHttpRequest.open(methods, url)
// - methods - GET, POST, PUT, DELETE
// - url - A DOMString representing the URL to send the request to.

// XMLHttpRequest.onreadystatechange = callback
// - callback is the func to be changed when the readyState changes

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getData();
});

function getData() {
  const XHR = new XMLHttpRequest();

  XHR.open("GET", "./api.txt");

  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      const element = document.createElement("p");
      element.textContent = XHR.responseText;
      document.body.appendChild(element);
    } else {
      console.log({
        status: XHR.status,
      });
    }
  };

  XHR.send();
}
