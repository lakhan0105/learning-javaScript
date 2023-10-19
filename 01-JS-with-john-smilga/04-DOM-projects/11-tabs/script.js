// Data
const data = [
  {
    tabTitle: "history",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam libero blanditiis laborum excepturi numquam quos temporibus recusandae corrupti unde autem neque, asperiores eveniet ut dicta rerum vero minima tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus commodi tenetur dolorem accusamus placeat, dolores saepe rem velit quam.",
  },
  {
    tabTitle: "vision",
    info: "dolor sit amet consectetur adipisicing elit. Quia aliquam libero blanditiis laborum excepturi numquam quos temporibus recusandae corrupti unde autem neque, asperiores eveniet ut dicta rerum vero minima tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus commodi tenetur dolorem accusamus placeat, dolores saepe rem velit quam.",
  },
  {
    tabTitle: "goals",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam libero blanditiis laborum excepturi numquam quos temporibus recusandae corrupti unde autem neque, asperiores eveniet ut dicta rerum vero minima tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum temporibus commodi tenetur dolorem accusamus placeat, dolores saepe rem velit quam.",
  },
];

// Selecting the elements
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContentEl = document.querySelector(".tab-content");

function displayContent(array) {
  const mapped = array
    .map((item) => {
      return `<h2 class="tab-title">${item.tabTitle}</h2>
            <p class="tab-info">${item.info}</p>`;
    })
    .join("");
  return mapped;
}

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", function () {
  tabBtns[0].focus(); // make the focus to 1st tab btn
  // pass the first obj(as an array) to displayContent() to display the first tab by default
  tabContentEl.innerHTML = displayContent([data[0]]);
});

// Event Listener
tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", function (e) {
    const id = e.currentTarget.dataset.id;

    // filter the objects
    const filtered = data.filter((item) => {
      return item.tabTitle === id;
    });

    tabContentEl.innerHTML = displayContent(filtered);
  });
});

// ISSUES
// - when the focus is set on the other els like img,
// - the white color of the tab is dissappearing.
// - but the color must not go when i click somewhere else
// -- not responsive for bigger screens
