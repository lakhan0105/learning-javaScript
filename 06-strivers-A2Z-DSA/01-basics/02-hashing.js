// HASHING BASICS

// count the no of times the number present in the given array
const arr = [1, 2, 1, 4];
const number = 15;
const hash = {};

for (let i = 0; i <= arr.length - 1; i++) {
  if (!hash[arr[i]]) {
    hash[arr[i]] = 1;
  } else {
    hash[arr[i]] += 1;
  }
}

// fetching the number from the array
console.log(
  `The ${number} is present ${hash[number] || 0} times in the given array`
);

// Counting the frequencies of each number in a array
function countFreq(arr) {
  const hash = {};

  // pre fetching the data
  for (let el of arr) {
    if (!hash[el]) {
      hash[el] = 1;
    } else {
      hash[el] += 1;
    }
  }

  // fetching and displaying
  for (let key in hash) {
    console.log(`${key} ${hash[key]}`);
  }
}

countFreq([10, 5, 10, 15, 10, 5]); // 5 2, 10 3, 15 1
