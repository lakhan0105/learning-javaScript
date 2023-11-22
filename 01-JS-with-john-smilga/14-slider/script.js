import { people } from "./data.js";

// Selecting the elements
const sildesContainer = document.querySelector(".slides-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

sildesContainer.innerHTML = people
  .map((person, slideIndex) => {
    // destructure
    const { img, name, job, text } = person;

    // more code later
    // 0 - active
    // 1 - next
    // prev - last
    let position = "next";

    // make first array item as the active class
    if (slideIndex === 0) {
      position = "active";
    }

    // make the last one position=last
    if (slideIndex === people.length - 1) {
      position = "last";
    }

    return `
            <article class="slide ${position}">
                <img class="slide-img" src="${img}" alt="not found">
                <h4 class="user-name">${name}</h4>
                <p class="title">${job}</p>
                <p class="text">${text}</p>
            </article>`;
  })
  .join("");

const startSlider = (type) => {
  // Selecting the elements
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;

  // when there are no slides left, set the next=first slide
  if (!next) {
    next = sildesContainer.firstElementChild;
  }

  // remove the classes
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = sildesContainer.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }

  // add classes
  active.classList.add("last");
  next.classList.add("active");
  last.classList.add("next");
};

// Event Listener
nextBtn.addEventListener("click", function () {
  startSlider();
});

prevBtn.addEventListener("click", function () {
  startSlider("prev");
});
