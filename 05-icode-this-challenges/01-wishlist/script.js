const data = [
  {
    img: "https://images.unsplash.com/photo-1594813591867-02e797aa4581?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amFyfGVufDB8fDB8fHww",
    name: "Medium Glass Jar, 500ml from xyz company",
    desc: "Dolor sit amet consectetur adipisicing elit. Magni autem sint architecto iure ratione laborum iste.",
    price: "12.79",
  },
  {
    img: "https://images.unsplash.com/photo-1610478506025-8110cc8f1986?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww",
    name: "Coffee Mug, 250ml from xyz company",
    desc: "Amet ermslf consectetur adipisicing elit. Magni autem sint archite.",
    price: "17.97",
  },
  {
    name: "Glass Jar, 500ml from xyz company",
    img: "https://images.unsplash.com/photo-1567763745030-bfe9c51bec27?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym93bHN8ZW58MHx8MHx8fDA%3D",
    desc: "Olor sit amet consectetur adipisicing elit. Magni autem sint architecto iure ratione laborum.",
    price: "14.79",
  },
];

// Selecting the elements
const cardsContainer = document.querySelector(".cards-container");

// Function to display the items
function displayItems() {
  const mapped = data.map((item) => {
    return `
            <article class="card">
                <div class="item-img-container">
                    <img src="${item.img}"
                        alt="not found">
                </div>
                <div class="item-info-container">
                    <div class="basic-info">
                        <p class="item-name">${item.name}</p>
                        <p class="item-desc">${item.desc}</p>
                    </div>
                    <div class="main-info">
                        <p class="item-price">$${item.price}</p>
                        <button class="cart-btn">Add to cart</button>
                    </div>
                </div>

                <span class="close-icon">
                    <i class="fa-solid fa-x"></i>
                </span>
            </article>`;
  });

  return mapped.join("");
}

cardsContainer.innerHTML = displayItems();

// Selecting creating the elements dynamically
const cartBtns = document.querySelectorAll(".cart-btn");
const closeIcons = document.querySelectorAll(".close-icon");

// Event listener on clicking the cart btn
cartBtns.forEach((cartBtn) => {
  cartBtn.addEventListener("click", function (e) {
    cartBtn.textContent = "added to cart";
    cartBtn.style.background = "green";
  });
});

// Event Listener on clicking the close icon
closeIcons.forEach((closeIcon) => {
  closeIcon.addEventListener("click", function (e) {
    const clickedCard = e.currentTarget.parentElement;
    clickedCard.classList.add("hide");
  });
});

