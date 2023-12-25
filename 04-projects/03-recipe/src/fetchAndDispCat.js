// URL
const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

// Selecting the elements
const categoriesContainerEL = document.querySelector(".categories-container");


// fetch categories
const fetchCategories = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

// display categories
function displayCategories(data) {
  const mapped = data.categories
    .map((item) => {
      // Destructuring
      const {
        idCategory: id,
        strCategory: categoryName,
        strCategoryThumb: categoryImg,
      } = item;

      return `<div class="category" data-catId="id">
                <img src="${categoryImg}" alt="not found">
                <p class="category-name">${categoryName}</p>
            </div>`;
    })
    .join("");

  categoriesContainerEL.innerHTML = mapped;
}

// fetch and display categories
export const fetchAndDispCat = async () => {
  const data = await fetchCategories(url);
  displayCategories(data);
};

