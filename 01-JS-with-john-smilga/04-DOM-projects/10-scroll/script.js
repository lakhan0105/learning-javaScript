// Selecting the elements
const hamburgerIcon = document.querySelector(".hamburger-icon");
const linksList = document.querySelector(".links-list");
const links = document.querySelectorAll(".link");
const headerEl = document.querySelector(".header-section");

let headerHeight = 0;

// Event Listener for toggling the nav
hamburgerIcon.addEventListener("click", function (e) {
  linksList.classList.toggle("hide");
});

window.addEventListener("scroll", function (e) {
  // - we need to make the position of the header-section fixed when we scroll more than the size of the header-section.
  headerHeight = headerEl.getBoundingClientRect().height;

  if (window.scrollY >= headerHeight) {
    headerEl.classList.add("fixed");
  } else {
    headerEl.classList.remove("fixed");
  }
});

// Event listener for the links
links.forEach((link) => {
  link.addEventListener("click", function (e) {
    // prevent default behaviour of links
    e.preventDefault();

    // get the element
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    // get navbar height -> alread found
    // headerHeight
    let linksListHeight = linksList.getBoundingClientRect().height;
    let hasFixedPosition = headerEl.classList.contains("fixed");

    // el position
    let elPosition = element.offsetTop - headerHeight;

    if (!hasFixedPosition) {
      elPosition = elPosition - headerHeight;
    }

    if (headerHeight > 80) {
      elPosition = elPosition + linksListHeight;
    }

    window.scrollTo({
      left: 0,
      top: elPosition,
    });

    linksList.classList.add("hide");
    // linksList.style.height = 0;
  });
});
