// display single drink
export const displaySingleDrink = async (data) => {
  // Destructuring
  const drinkData = data.drinks[0];
  const {
    strDrinkThumb: img,
    strDrink: name,
    strInstructions: desc,
  } = drinkData;

  //   Storing the ingredients as arrays
  const list = [
    drinkData.strIngredient1,
    drinkData.strIngredient2,
    drinkData.strIngredient3,
    drinkData.strIngredient4,
    drinkData.strIngredient5,
    drinkData.strIngredient6,
    drinkData.strIngredient7,
  ];

  // Selecting the elements
  const singleDrinkImg = document.querySelector(".single-drink-img");
  const drinkName = document.querySelector(".single-drink-name");
  const drinkDesc = document.querySelector(".single-drink-desc");
  const ingredientsList = document.querySelector(".ingredients-list");

  // Setting the values of the elements
  singleDrinkImg.src = img;
  document.title = name;
  drinkName.textContent = name;
  drinkDesc.textContent = desc;

  // set the values of ingredients list
  ingredientsList.innerHTML = list
    .map((item) => {
      // if item=null, return else, return <li>
      if (!item) {
        return;
      } else {
        return `<li>${item}</li>`;
      }
    })
    .join("");
};
