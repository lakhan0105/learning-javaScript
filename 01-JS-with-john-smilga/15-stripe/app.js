// IMPORTING THE DATA
import { sublinks } from "./data.js";

// SELECTING THE ELEMENTS
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const closeBtn = document.querySelector(".close-btn");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const sidebarLinksContainer = document.querySelector(
  ".sidebar-links-container"
);
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector("nav");

// SHOW/HIDE THE SIDEBAR
// Function to toggle sidebar wrapper
function toggleSidebar() {
  sidebarWrapper.classList.toggle("hide");
}

// Event Listeners on hamburger icon and close btn
hamburgerIcon.addEventListener("click", toggleSidebar);
closeBtn.addEventListener("click", toggleSidebar);

sidebarLinksContainer.innerHTML = sublinks
  .map((obj) => {
    const { links, page } = obj;
    console.log(links);
    return `
    <article class="links-card">
    <h3>${page}</h3>
    <div class="sidebar-sublinks">
        ${links
          .map((link) => {
            return `
                <a href="${link.url}">
                    <i class="${link.icon}"></i> ${link.label}
                </a>`;
          })
          .join("")}
    </div>

    </article>`;
  })
  .join("");

linkBtns.forEach((btn) => {
  // Event Listener when mouse hovers over the link
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;

    // check if the hovered text === page property in data
    const tempPage = sublinks.find(({ page }) => {
      if (page === text) {
        return page;
      }
    });

    console.log("temppage is ", tempPage);

    if (tempPage) {
      // destructuring
      const { page, links } = tempPage;
      console.log(links);

      // if tempage exsists, only then display the submenu
      submenu.style.left = `${center}px`;
      submenu.classList.add("show");

      submenu.innerHTML = `
      <section>
        <h4>${page}</h4>
        <div class="submenu-center col-2">
            ${links
              .map((link) => {
                return `
                <a href="${link.url}">
                    <i class="${link.icon}"></i> ${link.label}
                </a>`;
              })
              .join("")}
        </div>
      </section>
      `;
    }
  });
});

hero.addEventListener("mouseover", function () {
  submenu.classList.remove("show");
});

nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
