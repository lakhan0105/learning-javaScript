// JSON
// - Javascript object notation
// - Note: When ur setting up ur own json remeber
// - key names must be within "" not '' or ``
// - every other types except string can be without "", like numbers can be written as it is.
// - no semicolon at the end

const btn = document.querySelector(".btn");
const url = "./api/data.json";

function getData(url) {
  const XHR = new XMLHttpRequest();

  XHR.open("GET", url);
  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      // parse the data
      const data = JSON.parse(XHR.responseText);

      // create el
      const div = document.createElement("div");
      document.body.appendChild(div);

      // map
      const mapped = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");

      div.innerHTML = mapped;
    } else {
      console.log({
        status: XHR.status,
        readyState: XHR.readyState,
      });
    }
  };

  XHR.send();
}

btn.addEventListener("click", function () {
  getData(url);
});
