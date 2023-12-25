// Data
const quizData = [
  {
    question: "What is your name?",
    a: "sarvan",
    b: "charith",
    c: "sachin",
    d: "lakhan",
    ans: "d",
  },
  {
    question: "What is your fav color?",
    a: "red",
    b: "black",
    c: "blue",
    d: "green",
    ans: "b",
  },
  {
    question: "who is your friend?",
    a: "sarvan",
    b: "charith",
    c: "sachin",
    d: "all of the above",
    ans: "d",
  },
];

// Selecting the elements
const containerEl = document.querySelector(".container");
const submitBtn = document.querySelector(".submit-btn");
const question = document.querySelector(".question");
const option1Txt = document.querySelector(".option1-text");
const option2Txt = document.querySelector(".option2-text");
const option3Txt = document.querySelector(".option3-text");
const option4Txt = document.querySelector(".option4-text");
const options = document.querySelectorAll(".option");
const radioBtns = [...document.querySelectorAll("input[type=radio]")];

// Initialization
let i = 0;
let score = 0;
let userAns = undefined;

// Function to display the question data
function displayQuestion(i) {
  question.textContent = quizData[i].question;
  option1Txt.textContent = quizData[i].a;
  option2Txt.textContent = quizData[i].b;
  option3Txt.textContent = quizData[i].c;
  option4Txt.textContent = quizData[i].d;
}

// Function to update function
function updateQuestion() {
  radioBtns.forEach((radioBtn) => {
    // if the answer is selected
    if (radioBtn.checked) {
      // store the user answer
      userAns = radioBtn;

      // increase the score if the ans is correct
      if (userAns.id === quizData[i].ans) {
        score++;
      }

      // move to next question
      if (i < quizData.length - 1) {
        i++;
        radioBtn.checked = false;
      } else if (i >= quizData.length - 1) {
        containerEl.innerHTML = `Quiz completed. <h1>Score:${score}</h1>`;
        return;
      }
    }
  });
}

// EventListener when the page loads
window.addEventListener("DOMContentLoaded", displayQuestion(i));

// EventListener for submit btn
submitBtn.addEventListener("click", function () {
  updateQuestion();
  displayQuestion(i);
});
