// Function to show people
export const showPeople = (people) => {
  const mapped = people
    .map((item) => {
      return `<h2>Name: ${item.name}, job: ${item.job}</h2>`;
    })
    .join("");

  return mapped;
};
