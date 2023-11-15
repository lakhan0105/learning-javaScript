// FETCH
// - just like XHR, fetch is provided by the browser
// - fetch api is promise based
// - XHR is not wrong, you can completed all our upcoming examples and projects using XHR.
// - Fetch is just an alternative approach that has simpler and cleaner syntax.
// - The end result is same, stiil get the data dynanmically.

// fetch() is a function and is looking for a url as an param
// - fetch() returns a promise
// - we need to add .then(), to get the response object - useful props and methods
// - we need to convert the response into json, so we use json() method
// - json() method returns a promise, so we need another .then() to get the json response data
// - so we attach another then() and get the data

const url = "./people.json";

// const response = fetch(url);
// console.log(response); // we get promise(status:fullfilled) in the console

fetch(url)
  .then((response) => {
    // response obj - useful props and methods
    // console.log(response);

    // convert response into JSON data
    // it returns promise, so we need another .then
    return response.json();
  })
  .then((data) => {
    // create div element
    const div = document.createElement("div");
    document.body.appendChild(div);

    const mapped = data
      .map((item) => {
        return `<p>${item.name}</p>`;
      })
      .join("");

    // set innerHTML
    div.innerHTML = mapped;
  })
  .catch((err) => {
    console.log(err);
  });
