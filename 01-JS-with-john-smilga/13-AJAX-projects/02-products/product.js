// Selecting the elements
const singleProduct = document.querySelector(".single-product");

// Function to fetch the data
const fetchData = async () => {
  // get the unique id from query param
  const param = new URLSearchParams(window.location.search);
  const id = param.get("id");
  const url = `https://course-api.com/javascript-store-single-product?id=${id}`;

  const resp = await fetch(url);
  const data = await resp.json();
  displayData(data);
  return data;
};

// Function to display the data
const displayData = function (data) {
  try {
    // iterate over colors and display the .product-color element
    const colorsMap = data.fields.colors
      .map((color) => {
        return `<span class="product-color" style="background:${color}"></span>`;
      })
      .join("");

    // set the innerHTML of the singleProduct
    singleProduct.innerHTML = `<div class="single-product-wrapper">
                <div class="img-container">
                    <img class="single-product-img" src="${data.fields.image[0].url}" alt="not found">
                </div>
                <div class="product-info">
                    <h3 class="single-product-name">${data.fields.name}</h3>
                    <h5 class="single-product-company">${data.fields.company}</h5>
                    <span class="price">${data.fields.price}</span>
                    <div class="colors">${colorsMap}</div>
                    <p class="product-desc">${data.fields.description}</p>
                    <button class="btn">Add to cart</button>
                </div>
            </div>`;
  } catch (err) {
    console.log("error", err);
  }
};

const start = async () => {
  const data = await fetchData();
  displayData(data);
};

start();
