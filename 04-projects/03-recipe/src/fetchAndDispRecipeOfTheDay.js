// url
const recipeOfTheDayUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

// Selecting the elements
const cardImgEl = document.querySelector(".card-img");
const recipeNameEl = document.querySelector(".recipe-name");

const fetchRecipeOfTheDay = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

function displayRecipeOfTheDay(data) {
  // destructuting
  const [recipeObj] = data.meals;
  const recipeImg = recipeObj.strMealThumb;
  const recipeName = recipeObj.strMeal;

  cardImgEl.src = recipeImg;
  recipeNameEl.textContent = recipeName;
}

export const fetchAndDisplayRecipeOfTheDay = async () => {
  const data = await fetchRecipeOfTheDay(recipeOfTheDayUrl);
  displayRecipeOfTheDay(data);
};
