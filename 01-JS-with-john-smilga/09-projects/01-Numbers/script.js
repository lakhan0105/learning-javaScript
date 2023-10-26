const cardsNumber = document.querySelectorAll(".card-number");

// iterate over each span el
cardsNumber.forEach((cardNumber) => {
  updateCard(cardNumber);
});

function updateCard(element) {
  const dataValue = parseInt(element.dataset.value);
  const increment = Math.ceil(dataValue / 500);
  let intialValue = 0;

  const increaseCount = setInterval(() => {
    intialValue += increment;

    if (intialValue > dataValue) {
      element.textContent = dataValue;
      clearInterval(increaseCount);
      return;
    }

    element.textContent = intialValue;
  }, 1);
}
