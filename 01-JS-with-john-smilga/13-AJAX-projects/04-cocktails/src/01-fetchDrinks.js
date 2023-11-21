// Selecting the elements
const loading = document.querySelector(".loading");

// Function to fetch the drinks
export const fetchDrinks = async (url) => {
  // show loading text
  loading.classList.remove("hide-loading");

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
