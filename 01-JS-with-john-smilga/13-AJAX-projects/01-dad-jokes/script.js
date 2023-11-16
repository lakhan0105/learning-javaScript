// Selecting the elements
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// Initialization
const url = "https://icanhazdadjoke.com/";

// Function to get the jokes
function getJokes() {
  // loading... text before printing the joke
  result.textContent = "Loading....";

  // fetch
  fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "learning app",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      result.textContent = data.joke;
    })
    .catch((err) => {
      console.log(err);
      result.textContent = "There was an error...";
    });
}

// print dad joke when page is opened by default
getJokes();

// Event Listener
btn.addEventListener("click", getJokes);
