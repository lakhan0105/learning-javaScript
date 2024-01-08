// Selecting the elements
const cardImgEl = document.querySelector(".card-img");
const recipeNameEl = document.querySelector(".recipe-name");
const starBtnEl = document.querySelector(".star-btn");
const favsContEl = document.querySelector(".favs-container");
const favsHeading = document.querySelector(".favs-heading");

// Function to fetch random recipe
function getRandomRecipe() {
  const randomUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  // fetch random recipe data
  const fetchRandom = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    const randomRecipe = data.meals[0];
    return randomRecipe;
  };

  // add the random recipe to the dom
  const setRandom = async () => {
    const randomRecipe = await fetchRandom(randomUrl);
    // console.log(randomRecipe);

    // Destructuring
    const { strMealThumb, strMeal, idMeal } = randomRecipe;

    // setup the dom
    cardImgEl.src = strMealThumb;
    recipeNameEl.textContent = strMeal;
    starBtnEl.dataset.id = idMeal; // do not del this line. else id will not be found
  };

  setRandom();
}

// Event Listener on the fav button
starBtnEl.addEventListener("click", function (e) {
  // getRandomRecipe when clicked on fav btn
  getRandomRecipe();

  // Add to local storage
  function setLS() {
    const existingId = getLs();
    const updatedIds = Array.isArray(existingId) ? existingId : [];
    const idMeal = e.currentTarget.dataset.id;
    updatedIds.push(idMeal);
    localStorage.setItem("mealsId", JSON.stringify(updatedIds));
  }

  getLs();
  setLS();

  // get the dataset id from the clicked random recipe
  let favId = e.currentTarget.dataset.id;
  // pass the favId to the recipesById function to get that recipe details
  recipesById(Number(favId));
});

// Get from local strorage
function getLs() {
  const mealsId = JSON.parse(localStorage.getItem("mealsId"));
  return mealsId ? mealsId : [];
}

// DOMContent loaded
window.addEventListener("DOMContentLoaded", function () {
  getRandomRecipe();

  const allFavIds = getLs();

  allFavIds.forEach((favId) => {
    recipesById(favId);
  });
});

// Function to set the recipes by id (fav recipes)
function recipesById(favId) {
  // recipeByIdUrl
  const recipeByIdUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favId}`;

  // fetch
  const fetchById = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    const recipeObj = await data.meals[0];
    return recipeObj;
  };

  const addFav = async (url) => {
    const recipeObj = await fetchById(url);

    // Destructuring
    const { strMealThumb, strMeal } = recipeObj;

    // create the element (fav)
    const div = document.createElement("div");
    div.classList.add("fav");

    const img = document.createElement("img");
    img.classList.add("fav-img");
    img.src = strMealThumb;

    const p = document.createElement("p");
    p.classList.add("fav-name");
    p.textContent = strMeal;

    div.appendChild(img);
    div.appendChild(p);

    // set the favsContEl to
    favsContEl.appendChild(div);
  };

  addFav(recipeByIdUrl);
}
