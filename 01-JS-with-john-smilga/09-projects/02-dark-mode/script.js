const data = [
  {
    title: "The WET Codbase",
    date: new Date("10-10-2023").getFullYear(),
    readTime: 11,
    content:
      "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.",
  },
  {
    title: "Goodby, Clean Code",
    date: new Date("5-15-2023").getFullYear(),
    readTime: 5,
    content:
      "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.",
  },
  {
    title: "The WET Codbase",
    date: new Date("12-24-2023").getFullYear(),
    readTime: 11,
    content:
      "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.",
  },
  {
    title: "The WET Codbase",
    date: new Date("12-24-2023").getFullYear(),
    readTime: 11,
    content:
      "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.",
  },
];

// Selecting the elements
const articlesContainer = document.querySelector(".articles-container");
const toggleBtn = document.querySelector(".toggle-btn");

function displayData(array) {
  const mapped = array
    .map((articleObj) => {
      return `
            <article class="article">
                <h1 class="article-title">${articleObj.title}</h1>
                <div class="article-info">
                    <div class="date">
                        <p>${articleObj.date}</p>
                    </div>
                    <p class="read-time">
                        <span>${articleObj.readTime}</span>min read
                    </p>
                </div>
                <p class="article-content">${articleObj.content}</p>
            </article>
      `;
    })
    .join("");

  return mapped;
}

articlesContainer.innerHTML = displayData(data);

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
