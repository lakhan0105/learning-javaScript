// Selecting the elements
const iconsEl = document.querySelectorAll(".icon");
const cardsEl = document.querySelectorAll(".card");

// Event Listener
iconsEl.forEach((icon) => {
  icon.addEventListener("click", function (e) {
    // remove the show-ans for anyother card by default (if present)
    cardsEl.forEach((card) => {
      card.classList.remove("show-ans");
    });

    // store the current card of the clicked icon in a variable 
    const currentCard =
      e.currentTarget.parentElement.parentElement.parentElement;

    // remove/add the .show-ans in the currentCard 
    if (e.currentTarget.classList.contains("plus-icon")) {
      currentCard.classList.add("show-ans");
    } else if (e.currentTarget.classList.contains("minus-icon")) {
      currentCard.classList.remove("show-ans");
    }
  });
});
