// Initialization
const url = "https://course-api.com/javascript-store-products";

// Selecting the elements
const center = document.querySelector(".center");

// Function to fetch data
const fetchData = async () => {
  center.textContent = "Loading...";
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    console.log("There was an error");
  }
};

// Function to display the products
const displayProducts = function (list) {
  const productsList = list
    .map((product) => {
      const { id } = product;
      const { name, price } = product.fields;
      const formatedPrice = price / 100;

      return `<a href="./product.html?id=${id}" class="product">
                    <div class="img-container">
                        <img class="product-img img"
                            src="${product.fields.image[0].url}"
                            alt="${name} not found">
                    </div>
                    <div class="footer">
                        <p class="product-name">${name}</p>
                        <span class="price">${formatedPrice}</span>
                    </div>
                </a>`;
    })
    .join("");

  center.innerHTML = ` <div class="products-container"> ${productsList} </div>`;
};

// Function to start fetching and displaying the data
const start = async () => {
  const data = await fetchData();
  //   console.log(data);
  displayProducts(data);
};

start();
