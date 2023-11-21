// Selecting the elements
const titleEl = document.querySelector(".title");
const container = document.querySelector(".cocktails-container");
const loadingEl = document.querySelector(".loading");

export const displayDrinks = async ({ drinks }) => {
  if (!drinks) {
    loadingEl.classList.add("hide-loading");
    titleEl.textContent = "Sorry, unable to find the result";
    container.innerHTML = null;
    return;
  }

  console.log(drinks);

  const mapped = drinks
    .map((drink) => {
      // Destructuring
      const { idDrink: id, strDrinkThumb: img } = drink;
      let { strDrink: drinkName } = drink;
      drinkName = drinkName.toLowerCase();

      return ` 
            <a href="drink.html">
                <article class="cocktail" data-id="${id}">
                    <div class="img-container">
                        <img src="${img}" alt="not found">
                    </div>
                    <p class="cocktail-name">${drinkName}</p>
                </article>
            </a>`;
    })
    .join("");

  loadingEl.classList.add("hide-loading");
  container.innerHTML = mapped;
  titleEl.textContent = "";
  return container;
};
