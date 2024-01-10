// Selecting the elements
const addNoteBtn = document.querySelector(".add-note");
let count = 0;

function loadSavedCards() {
  const data = JSON.parse(localStorage.getItem("notesData")) || [];
  if (data) {
    data.forEach((cardText) => {
      addNewNote(cardText);
      updateLS();
    });
  }
}
loadSavedCards();

// Event Listener for AddNote btn
addNoteBtn.addEventListener("click", function () {
  addNewNote();
  count++;
});

// Function to add new note
function addNewNote(cardText = "") {
  // create new note card
  const card = document.createElement("div");
  card.classList = "notes-card";
  card.dataset.id = count;

  card.innerHTML = `
            <div class="tools">
                <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
            <main class="hidden"></main>
            <textarea></textarea>`;
  document.body.appendChild(card);
  count++;

  // Selecting the elements
  const editBtn = card.querySelector(".edit");
  const deleteBtn = card.querySelector(".delete");
  const mainEl = card.querySelector("main");
  const textareaEl = card.querySelector("textarea");

  // set the values of the saved cards
  textareaEl.value = cardText;

  // Event listener on edit btn
  editBtn.addEventListener("click", function () {
    mainEl.classList.toggle("hidden");
    textareaEl.classList.toggle("hidden");

    if (textareaEl.classList.contains("hidden")) {
      updateLS();
      mainEl.textContent = textareaEl.value; // add the text to the mainEL
    }
  });

  // Event Listener on textareaEl
  textareaEl.addEventListener("input", function (e) {
    const { value } = e.target;
    mainEl.textContent = value;
  });

  // delete
  deleteBtn.addEventListener("click", function (e) {
    card.remove();
    updateLS();
  });
}

// Function to Update the Local Storage
function updateLS() {
  // Select all the text of the textarea els
  const notesTexts = document.querySelectorAll("textarea");

  // create an array and push all the texts of the textarea
  const notesArr = [];

  notesTexts.forEach((noteText) => {
    notesArr.push(noteText.value);
  });

  // update the local storage
  localStorage.setItem("notesData", JSON.stringify(notesArr));
}
