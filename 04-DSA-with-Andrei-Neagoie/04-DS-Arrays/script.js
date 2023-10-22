// Arrays
// - ordered collection of data

const strings = ["a", "b", "c", "d"]; // 4*4 = 16bytes

// lookup - accessing the array value
console.log(strings[3]); // "d" - O(1)

// push
strings.push("new item"); // O(1)

// pop
strings.pop(); // O(1)

// unshift()
strings.unshift("new at start");
console.log(strings); // [ 'new at start', 'a', 'b', 'c', 'd' ] - O(n)

// splice()
// adding something at the middle of the array
strings.splice(2, 0, "new item in middle");
console.log(strings); // [ 'new at start', 'a', 'new item in middle', 'b', 'c', 'd' ]
// - here the big o -> O(n/2) - O(n)
// - cuz we are looping from the middle of the array

// Summary
// lookup  -  O(1)
// push    -  O(1)
// pop     -  O(1)
// unshift -  O(n)
// insert  -  O(n)
// delete  -  O(n)
// so inserting and deleting might not be best in the case of array ds, cuz O(n)

// STATIC VS DYNAMIC ARRAYS ------------------------------------------------------------------------------------
// Static array
// - Size if fixed and you cannot change the size after creation
// - you need to give the size before creating

// Dynamic array
// - size is not fixed
// - what happens behind - when u add something to an array, JS stores the [array+new] item in a new mem loc
// - In this process, it will run loop so O(1) can be O(n)

// IMPLEMENTING AN ARRAY ---------------------------------------------------------------------------------------
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    // const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array1 = new MyArray();
console.log(array1); // MyArray { length: 0, data: {} }

// push
array1.push("new item");
console.log(array1); // MyArray { length: 1, data: { '0': 'new item' } }

// pop
array1.pop();
console.log(array1); // MyArray { length: 0, data: {} }

array1.push("item1");
array1.push("item2");
console.log(array1); // MyArray { length: 2, data: { '0': 'item1', '1': 'item2' } }

// delete
array1.shiftItems(1);
console.log(array1);

// STRINGS AND ARRAYS ------------------------------------------------------------------------------------------
// - When u get a question on string, treat them like arrays
// - example reversing a string, convert them to arrays and apply split() etc....

// split()
// - to split words -> string.split(",")
// - to split letters -> string.split(" ")

// EXERCISE
const sentence = "Hello my name is Lakhan";
// console.log([...sentence].reverse());
// console.log(sentence.split("").reverse());

function reverseStr(str) {
  // Intitialisation
  let reversedSentence = "";

  // split(to convert to array and split) and reverse
  const reversedLetters = str.split("").reverse();
  for (let letter of reversedLetters) {
    reversedSentence += letter;
  }
  console.log(reversedSentence);
}

reverseStr(sentence);

// EXERCISE 2
// mergeSortedArrays([0,3,4,31],[4,6,30])
// Output-> [0,3,4,4,6,30,31]

function mergeSortedArrays(...arrays) {
  const mergedItems = [];

  for (let i = 0; i < arrays.length; i++) {
    const arg = arrays[i]; // arg is each of the array arguement
    for (let j = 0; j < arg.length; j++) {
      mergedItems.push(arg[j]);
    }
  }

  // now sort the merged items
  const sortedItems = mergedItems.sort((a, b) => {
    return a - b;
  });

  console.log(sortedItems);
}

// you can pass any number of arrays
mergeSortedArrays([1, 2, 5], [3, 4], [4, 10]);
