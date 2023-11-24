// URL
let URL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=searchValue";

// Selecting the elements
const formEl = document.querySelector("form");
const userInput = document.querySelector(".user-input");
const cardsContainer = document.querySelector(".cards-container");
const textEl = document.querySelector(".text");

// Function to fetch the data
const fetchData = async (obj) => {
  textEl.textContent = "Loading...";
  const resp = await fetch(URL);
  const data = await resp.json();
  return data;
};

// Function to display the data
function displayData(data) {
  console.log(data);

  // Destructuring
  const { search: resultArray } = data.query;
  console.log(resultArray);

  // set the result
  const mappedResult = resultArray
    .map((obj) => {
      // Destructuring
      const { title, snippet: desc, pageid: id } = obj;

      return `<a class="result-card" href="https://en.wikipedia.org/?curid=${id}" >
                <h3 class="result-card-title">${title}</h3>
                <p class="desc">${desc}</p>
            </a>`;
    })
    .join("");
  textEl.classList.add("hide");
  cardsContainer.innerHTML = mappedResult;
}

// Function to fetch and display the data
const start = async (url) => {
  const data = await fetchData(URL);
  displayData(data);
};

// Event Listener when user submits
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const userInputVal = userInput.value;

  // set the url if the userInputVal is true
  if (userInputVal) {
    URL = `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${userInputVal}`;
    console.log(URL);

    // run the main function to fetch and display searched data
    start(URL);
  } else {
    // show the textEl cuz we need to show the error
    textEl.classList.remove("hide");
    // change the error message in the textEl
    textEl.textContent = "invalid input!.. please enter the search input";
    // remove everything from the cardsContainer
    cardsContainer.innerHTML = null;
  }
});
