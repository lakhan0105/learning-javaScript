/*
// Function to find nemo
const names = new Array(100).fill("nemo");
function findNemo(array) {
  const t0 = performance.now();
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === "nemo") {
      console.log("We found nemo");
    }
  }
  const t1 = performance.now();
  console.log(`Time taken to run findNemo: ${t1 - t0}`);
}

findNemo(names);

// Print first two boxes
const boxes = [1, 2, 3, 4, 5, 6];
function firstTwoBoxes(array) {
  console.log(array[0]); // Big O -> O(1)
  console.log(array[1]); // Big O -> O(1)
}
firstTwoBoxes(boxes); // Big O -> O(1+1) = O(2) -> constant time
*/

// Exercise: Big O Calculation
// What is the Big O of the below function? (Hint, you may want to go line by line)
// ANS: Big O(3+4n)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// EXERCISE 2
// What is the Big O of the below function? (Hint, you may want to go line by line)
// ANS: Big O(4+7n)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// Print 1st item, then 1st half items, then hello 100times
function printFirstItemThenFirstHalfThenSayHi100Times(array) {
  // print first item
  console.log("First item:", array[0]);

  // print 1st half
  // calc middle index
  const middleIndex = Math.floor((array.length - 1) / 2);
  console.log(middleIndex);

  for (let i = 0; i <= middleIndex; i++) {
    console.log("first half of the array", array[i]);
  }

  // say Hi 100 times
  for (let i = 0; i < 100; i++) {
    console.log("Hi");
  }
}

const namesArray = ["Lakhan", "Dheeraj", "Sarvan", "Sachin", "charith"];
printFirstItemThenFirstHalfThenSayHi100Times(namesArray);

// CALCULATING BIG O
// O(1 + (n/2) + 100)
// it will come down to O((n/2)+101)
// then it will be considered as O(n) because we remove the constants

function compressBoxes(boxes1, boxes2) {
  boxes1.forEach((box) => {
    console.log(box);
  });

  boxes2.forEach((box) => {
    console.log(box);
  });
}

// Calculate Big O
// not (O(n)) beacuse here, 1st forEach will depend on the size of boxes1
// And, 2nd foeEach will depend on the size of boxes2
// So, Big O(a+b)

// log all pairs of array
// [1,2,3,4,5];

// 1,1
// 1,2
// 1,3
// 1,4
// 1,5

// 2,1
// 2,2
// and so on ........

function allPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`${array[i]}, ${array[j]}`);
    }
  }
}

allPairs([1, 2, 3, 4, 5]);

// Calculating Big O
// When we see nested loops, the + becomes *
// O(n*n) which is written as O(n^2)
// We call O(n^2) -> Quadratic Time
// Means for 2elements, we do 4ops (2^2)=4
// for 3 els, (3^2)=9ops

// PRINT ALL NUMS AND THEN ALL PAIR SUMS OF THE PASSED I/P(arrays)
function printAllNumsAndThenPairSum(array) {
  // print all nums
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  // print all pair sums
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`${array[i] + array[j]}`);
    }
  }
}

printAllNumsAndThenPairSum([1, 2, 3]);

// Calculating Big O
// O(n+n^2) but, rule 4 says to drop non-dominants, means (n^2) is more imp than n
// as the i/p increases the size of n^2 is more imp than n
// Another ex: O(x^2+3x+100+x/2) -> O(x^2)

// INTERVIEW EXERCISE
// Given 2 arrays, func that lets users know (t/f) if any common items in them.
// Example
// const array1 = ['a','b','c','x'];
// const array2 = ["z",'y','i'];
// should return false
// ---------
// const array1 = ['a','b','c','x'];
// const array2 = ["z",'y','x'];
// should return true

// INPUTS AND OUTPUTS
// 2 parameters
// return true/false

/*
function checkForCommon(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      }
    }
  }
  return false;
}
// O(a*b) // cuz the array1 and array2 can have diff number values
console.log(checkForCommon(["a", "b", "c", "x"], ["z", "y", "i"])); // false
console.log(checkForCommon(["a", "b", "c", "x"], ["z", "y", "x"])); // true

// DIFFERENT SOLUTION
function checkForCommon(array1, array2) {
  let obj = {};
  // loop through 1st array and create obj where properties === items in the array
  for (let i = 0; i < array1.length; i++) {
    if (!obj[array1[i]]) {
      const item = array1[i];
      obj[item] = true;
    }
  }

  // loop through 2nd array and check if item in 2nd array exists on created object
  for (let j = 0; j < array2.length; j++) {
    if (obj[array2[j]]) {
      return true;
    }
  }

  return false;
}

console.log(checkForCommon(["a", "b", "c", "x"], ["z", "y", "i"])); // false
console.log(checkForCommon(["a", "b", "c", "x"], ["z", "y", "x"])); // true
// O(a+b)

// ANOTHER SOLUTION
function checkForCommon(array1, array2) {
    return array1.some((item) => array2.includes(item));
}
console.log(checkForCommon(["a", "b", "c", "x"], ["z", "y", "i"])); // false
console.log(checkForCommon(["a", "b", "c", "x"], ["z", "y", "x"])); // true
*/


