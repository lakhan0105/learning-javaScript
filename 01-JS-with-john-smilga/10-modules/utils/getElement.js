// Function to select elements
export function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error("Please select the elements properly");
  }
}
