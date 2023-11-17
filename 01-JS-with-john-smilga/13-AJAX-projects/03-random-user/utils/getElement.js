// Function to get the elements
export const getElement = (selection) => {
  const element = document.querySelector(selection);

  if (element) {
    return element;
  } else {
    throw new Error("invalid selection, please check again");
  }
};
