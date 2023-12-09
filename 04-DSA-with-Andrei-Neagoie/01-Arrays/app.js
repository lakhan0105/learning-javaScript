// DATA STRUCTURES: ARRAYS
// Organises data in an order.

/*
// BASIC OPS WITH ARRAYS --------------------
// Create an Array
const array1 = ["a", "b", "c", "d"];

// Access -> O(1)
console.log(array1[2]); // c

// push() -> O(1)
array1.push("z"); // // [ 'a', 'b', 'c', 'd', 'z' ]

// pop() -> O(1)
array1.pop();

// unshift() -> O(n/2) -> O(n)
array1.unshift("x");

// shift() -> O(n/2) -> O(n)
array1.shift();

// Inserting -> O(n/2) -> O(n)
array1.splice(3, 0, "alienAt4index");
console.log(array1); // [ 'a', 'b', 'c', 'alienAt4index', 'd' ]

// Deleting -> O(n/2) -> O(n)
// 2params -> starting index, no of els to del from that index
array1.splice(3, 1);
console.log(array1); // [ 'a', 'b', 'c', 'd' ]

// IMPLEMENTING AN ARRAY ---------
// - we will build array from scratch using class.
// - we are doing all this because we can create any Data Structure from scratch

class MyArray {
  constructor() {
    this.length = "0";
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1]; // store in a var to return it
    delete this.data[this.length - 1]; // delete
    this.length--; // decrease the length
    return lastItem;
  }

  delete(index) {
    const itemToDel = this.data[index];
    this.shifting(index);
    return itemToDel;
  }

  shifting(index) {
    for (let i = index; i < this.length - 1; i++) {
      // data at curr index = data from next index.
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1]; // delete the last item which extra
    this.length--;
  }
}

const names = new MyArray();

names.push("lakhan");
names.push("dheeraj");
names.push("Sarvan");

console.log(names.delete(1));
console.log(names);
*/

// EXERCISE : REVERSE A STRING
// Input: "Hi my name is Lakhan"
// Output: "nahkaL si eman ym iH"
// Note: we can use split(), but try doing without it,
// - we can just push the str chars inot new array without converting them to str
function reverseStr(str) {
  // create an empty array
  const reverseArray = [];

  // loop over the array and push them into that empty array
  for (let i = str.length - 1; i >= 0; i--) {
    reverseArray.push(str[i]);
  }

  // join() to convert to string
  return reverseArray.join("");
}
console.log(reverseStr("hi my name is Lakhan")); // nahkaL si eman ym ih

// EXERCISE MERGE SORTED ARRAYS
// INPUT: mergeSortedArrays([0,3,4,31],[4,6,30])
// OUTPUT: [0,3,4,4,6,30,31]
// function mergeSortedArrays(arr1, arr2) {
//   // combine them into one array
//   const mergedArray = [...arr1, ...arr2];
//   console.log(mergedArray);

//   // sort the array items(numbers)
//   function sortArrayNums(arr) {
//     const sort = arr.sort((a, b) => {
//       return a - b;
//     });
//     return sort;
//   }

//   const ans = sortArrayNums(mergedArray);
//   console.log(ans);
// }

function mergeSortedArrays(arr1, arr2) {
  // check for empty input
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  const mergeArrays = [...arr1, ...arr2];
  const sortedArray = [];
  let firstItem = mergeArrays[0];
  let secondItem = mergeArrays[1];

  for (
    let i = 1, j = i + 1;
    i < mergeArrays.length, j < mergeArrays.length;
    i++, j++
  ) {
    if (firstItem < secondItem) {
      sortedArray.push(firstItem);
      firstItem = mergeArrays[i];
      secondItem = mergeArrays[i + 1];
    } else {
      if (secondItem < firstItem) {
        sortedArray.push(secondItem);
        firstItem = mergeArrays[j];
        secondItem = mergeArrays[j + 1];
      }
    }
  }

  console.log(sortedArray);
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
