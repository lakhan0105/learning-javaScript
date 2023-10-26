// data (from john smilga's project)
const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image: "https://course-api.com/images/store/product-1.jpeg",
    price: 9.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image: "https://course-api.com/images/store/product-2.jpeg",
    price: 79.99,
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image: "https://course-api.com/images/store/product-3.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-4.jpeg",

    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image: "https://course-api.com/images/store/product-5.jpeg",

    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image: "https://course-api.com/images/store/product-6.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image: "https://course-api.com/images/store/product-7.jpeg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image: "https://course-api.com/images/store/product-8.jpeg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image: "https://course-api.com/images/store/product-9.jpeg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image: "https://course-api.com/images/store/product-10.jpeg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image: "https://course-api.com/images/store/product-11.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image: "https://course-api.com/images/store/product-12.jpeg",
    price: 9.99,
  },
];

// Selecting the elements
const productsContainer = document.querySelector(".products-container");
const filterBtnsContainer = document.querySelector(".filter-btns-container");
const userInput = document.querySelector(".user-input");

// FUNCTION TO CREATE AN ARRAY OF FILTER BTNS --------------------------------
function createFilterBtns(arr) {
  const reduced = arr.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.company)) {
        acc.push(curr.company);
      }
      return acc;
    },
    ["all"]
  );
  return reduced;
}
const filterBtnsArray = createFilterBtns(products);

// FUNCTION TO DISPLAY FILTER BTNS -------------------------------------------
function displayFilterBtns(arr) {
  const mapped = arr
    .map((item) => {
      return `<button class="filter-btn ${item}-filter-btn" data-id=${item}>${item}</button>`;
    })
    .join("");
  return mapped;
}
filterBtnsContainer.innerHTML = displayFilterBtns(filterBtnsArray);

// FUNCTION TO DISPLAY PRODUCTS -----------------------------------------------
function displayProducts(arr) {
  const mapped = arr
    .map((productObj) => {
      return `
            <article class="product">
                <img class="product-img" src="${productObj.image}" alt="not found">

                <footer class="product-footer">
                    <p class="product-name">${productObj.title}</p>
                    <span class="product-price">${productObj.price}</span>
                </footer>
            </article>`;
    })
    .join("");
  return mapped;
}
productsContainer.innerHTML = displayProducts(products);

// Selecting the filter btns
const filterBtns = document.querySelectorAll(".filter-btn");

// EVENT LISTENER FOR FILTER BTNS ---------------------------------------------
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget.dataset.id);

    // use filter method on products array
    const filteredProducts = products.filter((productObj) => {
      if (e.currentTarget.dataset.id === productObj.company) {
        return productObj;
      }
    });

    // check the dataset and display the filtered products accordingly
    if (e.currentTarget.dataset.id === "all") {
      productsContainer.innerHTML = displayProducts(products);
    } else {
      productsContainer.innerHTML = displayProducts(filteredProducts);
    }
  });
});

// EVENT LISTENER FOR KEY EVENTS ----------------------------------------------
userInput.addEventListener("keyup", function (e) {
  const inputValue = userInput.value;
  const filteredProducts = products.filter((productObj) => {
    return productObj.title.toLowerCase().includes(inputValue);
  });
  productsContainer.innerHTML = displayProducts(filteredProducts);
});
