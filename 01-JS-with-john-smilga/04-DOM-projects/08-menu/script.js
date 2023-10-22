// Data
const data = [
  {
    src: "./imgs/item-1.jpeg",
    name: "ButterMilk Pancakes",
    price: "$15.99",
    category: "breakfast",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
  {
    src: "./imgs/item-2.jpeg",
    name: "Dinner double",
    price: "$13.99",
    category: "dinner",
    moreInfo:
      "umblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    src: "./imgs/item-3.jpeg",
    name: "Godzilla Milkshake",
    price: "$5.99",
    category: "dessert",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
  {
    src: "./imgs/item-4.jpeg",
    name: "Country Delight",
    price: "$15.99",
    category: "breakfast",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
  {
    src: "./imgs/item-5.jpeg",
    name: "Egg Attack",
    price: "$14.99",
    category: "sanks",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
  {
    src: "./imgs/item-2.jpeg",
    name: "Oreo Dream",
    price: "$20.99",
    category: "lunch",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
  {
    src: "./imgs/item-7.jpeg",
    name: "Bacon Overflow",
    price: "$16.99",
    category: "breakfast",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
  {
    src: "./imgs/item-8.jpeg",
    name: "American Classic",
    price: "$11.99",
    category: "lunch",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
  {
    src: "./imgs/item-9.jpeg",
    name: "Quarantine Buddy",
    price: "$16.99",
    category: "dessert",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
  {
    src: "./imgs/item-10.jpeg",
    name: "Steak Dinner",
    price: "$35.99",
    category: "dinner",
    moreInfo:
      "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Harum, Atque!",
  },
];

// Selecting the elements
const centerEl = document.querySelector(".center");
const btnsContainerEl = document.querySelector(".btns-container");

// Function to map the passed array items and display them
function displayData(array) {
  const mapped = array
    .map((item) => {
      const { src, name, price, moreInfo } = item;
      return `            
            <article class="item-card">
                <div class="card-top">
                    <div class="item-img-container">
                        <img src="${src}" alt="not found">
                    </div>
                </div>

                <div class="card-bottom">
                    <div class="basic-info">
                        <p class="item-name">${name}</p>
                        <span class="item-price">${price}</span>
                    </div>
                    <p class="more-info"> ${moreInfo}</p>
                </div>
            </article>`;
    })
    .join("");

  return mapped;
}

// function to display the btns according to the categories in the data
function displayBtns() {
  // create a filter btns-names array from the data array
  const filterBtnsArray = data.reduce(
    (acc, curr) => {
      if (!acc.includes(curr.category)) {
        acc.push(curr.category);
      }
      return acc;
    },
    ["all"]
  );

  const mappedBtns = filterBtnsArray
    .map((btnName) => {
      return `<button class="${btnName}-btn btn" data-id="${btnName}">${btnName}</button>`;
    })
    .join(" ");

  return mappedBtns;
}

// invoke the displayData() and displayBtns()
centerEl.innerHTML = displayData(data);
btnsContainerEl.innerHTML = displayBtns();

// Selecting the dynamic elements
const btns = document.querySelectorAll(".btn");

// Event listener for the filter btns created dynamically --------------
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // create a array named filtered with filtered items
    const filtered = data.filter((item) => {
      return item.category === e.currentTarget.dataset.id;
    });

    if (e.currentTarget.classList.contains("all-btn")) {
      centerEl.innerHTML = displayData(data); // pass the data array
    } else {
      centerEl.innerHTML = displayData(filtered); // pass filtered array
    }
  });
});

// ISSUES
// - NEED TO MAKE IT COMPATIBLE FOR BIGGER SCREENS

// POINTS TO REMEMBER
// - when u are creating an element dynamically, like filter btns here, you need to select them only after declaring them, else it won't get selected
