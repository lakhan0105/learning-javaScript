// set up restaurant data
const data = [
  {
    id: "1",
    img: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Aenean eget tristiqu",
    fav: false,
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Aenean eget tristiqu",
    fav: false,
  },
  {
    id: "3",
    img: "https://images.pexels.com/photos/4078054/pexels-photo-4078054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Aenean eget tristiqu",
    fav: false,
  },
  {
    id: "4",
    img: "https://images.pexels.com/photos/3009323/pexels-photo-3009323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Aenean eget tristiqu",
    fav: false,
  },
];

// Selecting the elements
const hamburgerBtn = document.querySelector(".hamburger-btn");
const sidebarCloseBtn = document.querySelector(".sidebar-close-btn");
const sidebarContEl = document.querySelector(".sidebar-container");
const cardsContEl = document.querySelector(".cards-container");
const sidebarCardsContEl = document.querySelector(".sidebar-cards-container");

// TOGGLE SIDEBAR ======================
// Function to toggle sidebar
function toggleSidebar() {
  sidebarContEl.classList.toggle("hide");
}

// Event Listeners to toggle sidebar
hamburgerBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// DISPLAY DATA
function setAllRestaurants(data) {
  const mapped = data.map((item) => {
    // Destructuring
    const { img, name, id, fav } = item;

    return `
            <article class="card">
                <div class="card-img-cont">
                    <img src="${img}" alt="${name}">
                </div>
                <div class="card-info">
                    <div class="basic-info">
                        <h3 class="name">${name}</h3>
                        <p class="order">
                            <span><i class="fa-solid fa-phone"></i></span>
                            order
                        </p>
                    </div>
                    <div class="fav">
                        <button class="fav-btn btn" data-id="${id}">
                            <span class="fav-icon icon">
                                <i class="fa-regular fa-heart"></i>
                            </span>
                        </button>
                        <p class="fav-text">add to fav</p>
                    </div>
                </div>
            </article>`;
  });
  cardsContEl.innerHTML = mapped.join("");
}
setAllRestaurants(data);

// ADD TO FAV
// Selecting all the fav btns
const favBtns = document.querySelectorAll(".fav-btn");

// get from LS
let existingFavs = JSON.parse(localStorage.getItem("favs")) || [];

// Function to check if an object is already in favDetails
function isAlreadyFav(id) {
  for (let item of existingFavs) {
    if (item.id === id) {
      return true;
    }
  }
  return false;
}

// iterating and grabing the data id
favBtns.forEach((favBtn) => {
  favBtn.addEventListener("click", (e) => {
    const eId = e.currentTarget.dataset.id;
    const findObj = data.find((item) => {
      if (item.id === eId) {
        return item;
      }
    });

    if (isAlreadyFav(findObj.id)) {
      // If already a favorite, remove it
      existingFavs = existingFavs.filter((item) => {
        if (item.id !== findObj.id) {
          return item;
        }
      });
    } else {
      // If not a favorite, add it
      existingFavs.push(findObj);
      // open the sidebar
      sidebarContEl.classList.remove("hide");
    }

    localStorage.setItem("favs", JSON.stringify(existingFavs));
    setSavedRest(existingFavs);
  });
});

function setSavedRest(arr) {
  const mapped = arr
    .map((item) => {
      return `    <article class="sidebar-card">
                    <div class="sidebar-card-img-cont">
                        <img src="${item.img}"
                            alt="not found">
                    </div>
                    <div class="sidebar-card-info">
                        <h5 class="name">${item.name}</h5>
                </article>`;
    })
    .join("");

  sidebarCardsContEl.innerHTML = mapped;
}

setSavedRest(existingFavs);
