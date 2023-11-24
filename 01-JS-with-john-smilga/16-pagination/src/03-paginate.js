// Function to break the big array into small arrays
export function paginate(data) {
  const itemsPerPage = 9;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  console.log({ length: numberOfPages });

  // we need to create a array containing the array of objects of length=9
  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    // logic
    // 0*9=0  0+9=9
    // 1*9=9  9+9=18
    // 3*9=18 18+9=27
    // 4*9=27 27+9=36

    const start = index * itemsPerPage;
    const tempData = data.slice(start, start + itemsPerPage);
    return tempData;
  });
  console.log(newFollowers);

  return newFollowers;
}
