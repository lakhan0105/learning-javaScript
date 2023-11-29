// Function to select the element
export function getElement(selection) {
  const element = document.querySelector(selection);

  if (element === null) {
    throw new Error(`Invalid ELement selection. Please check again`);
  } else {
    return element;
  }
}
