// Review data
const reviewData = [
  {
    userId: 0,
    userImg: "./imgs/0_image.jpg",
    userName: "Lakhan Kumar",
    userRole: "web developer",
    userReview:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem sunt, libero provident accusamusdolores impedit. architecto aliquam.",
  },
  {
    userId: 1,
    userImg: "./imgs/1_image.jpg",
    userName: "Dinesh",
    userRole: "socail media manager",
    userReview:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem sunt, libero provident accusamusdolores impedit. architecto aliquam.",
  },
  {
    userId: 2,
    userImg: "./imgs/2_image.jpg",
    userName: "Sarvan",
    userRole: "Java developer",
    userReview:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem sunt, libero provident accusamusdolores impedit. architecto aliquam.",
  },
  {
    userId: 3,
    userImg: "./imgs/3_image.jpg",
    userName: "Dhanush",
    userRole: "web developer",
    userReview:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem sunt, libero provident accusamusdolores impedit. architecto aliquam.",
  },
  {
    userId: 4,
    userImg: "./imgs/4_image.jpg",
    userName: "Sachin",
    userRole: "business man",
    userReview:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem sunt, libero provident accusamusdolores impedit. architecto aliquam.",
  },
];

// Initialization
let count = 0;

// Selecting the elements
const btns = document.querySelectorAll(".btn");
const userImgEl = document.querySelector(".user-img");
const userNameEl = document.querySelector(".user-name");
const userRoleEl = document.querySelector(".user-role");
const userReviewEl = document.querySelector(".user-review");

// Function to change the content of the card when any btn is clicked
function updateCard(count) {
  userImgEl.src = reviewData[count].userImg;
  userNameEl.textContent = reviewData[count].userName;
  userRoleEl.textContent = reviewData[count].userRole;
  userReviewEl.textContent = reviewData[count].userReview;
}

// Function to genereate random numbers
function genRand() {
  return Math.floor(Math.random() * reviewData.length);
}

// Event listener for btns
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const elClassList = e.currentTarget.classList;
    if (elClassList.contains("next")) {
      if (count < reviewData.length - 1) {
        count++;
        updateCard(count);
      } else {
        count = 0;
        updateCard(count);
      }
    } else if (elClassList.contains("prev")) {
      if (count <= 0) {
        count = reviewData.length - 1;
        updateCard(count);
      } else {
        count--;
        updateCard(count);
      }
    } else if (elClassList.contains("random-btn")) {
      count = genRand();
      updateCard(count);
    }
  });
});
