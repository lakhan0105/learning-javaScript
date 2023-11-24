// Selecting the elements
const cardsContainer = document.querySelector(".cards-container");

// Function to display users data
export const displayUsers = async (userData) => {
  console.log(userData);

  const mapped = userData
    .map((userObj) => {
      // Destructuring
      const { avatar_url: img, login: name, html_url: link } = userObj;

      return `<article class="card">
                    <div class="img-container">
                        <img class="person-img" src="${img}" alt="not found">
                    </div>
                    <p class="person-name">${name}</p>
                    <a class="person-link" href="${link}">view profile</a>
            </article>`;
    })
    .join("");

  cardsContainer.innerHTML = mapped;
};
