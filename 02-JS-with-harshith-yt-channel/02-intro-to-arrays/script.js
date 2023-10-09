// INTRO TO ARRAYS
// - lets say u want to store many fruit names in a single variable called fruits
// - you cannot achieve this with primitives, so we use reference types like arrays
// - Arrays are the ordered collection of items.

let fruits = ["orange", "apple", "mango"];
console.log(fruits); // [ 'orange', 'apple', 'mango' ]

// Access the array elements
// - we can access them using index
console.log(fruits[0]); // orange

// Modifying the array elements
fruits[0] = "bannana";
console.log(fruits); // [ 'bannana', 'apple', 'mango' ]

// check whether the given variable is an array or not
console.log(Array.isArray(fruits)); // true

// ARRAY METHODS ------------------------------------------------------------------------------------------------
// push() - pushes the item in the end, returns the length of the array after pushing.
// pop()  - removes the array item from the end, returns the popped item
// unshift() - adds at the beginning, returns the length of the array after adding
// shift()   - removes from the beginning, returns the removed item

// Note ---------------------------------------------------------------------------------------------------------
// All these methods changes the original array
// push() and pop() are fast as compared to unshift() and shift()

// PRIMITIVES VS REFERENCE TYPES --------------------------------------------------------------------------------
// Primitives
let num1 = 3;
let num2 = num1;
console.log("Value of num1:", num1); // 3
console.log("Value of num2:", num2); // 3

// Change the value of num1 and see the value of num2
num1 = 40;
console.log("Value of num1:", num1); // 40
console.log("Value of num2:", num2); // 3

// Observation
// - we can see that only the num1 value changes and the num2 remains same.
// - that is why we say that the primitives are immutable
// - num1 and num2 are stored in the stack.

// Refereneces
const arr1 = [33, 54, 49];
const arr2 = arr1;
console.log("Value of arr1:", arr1); // [33, 54, 49]
console.log("Value of arr2:", arr2); // [33, 54, 49]

// now change the value of arr1
arr1.push("new number");
console.log("Value of arr1:", arr1); // [33, 54, 49,"new number"]
console.log("Value of arr2:", arr2); // [33, 54, 49,"new number"]

// Observation
// - we can see that when u change the value of arr1, arr2 also changes simultaniously
// - this is because, the reference types are mutable
// - they are stored in heap, only their addressed is stored in stack

// CLONING THE ARRAYS -------------------------------------------------------------------------------------------
// - we need to clone such array1 === array2 -> false
// - any changes made to one array must not affect the other array

// Approach1
// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];
// console.log(array1 === array2); // false

// Approach2: using slice()
// let array1 = [1, 2, 3];
// let array2 = array1.slice(0);
// console.log(array2); // [1,2,3]
// console.log(array1 === array2); // false

// Approach3: using concat()
// let array1 = [1, 2, 3];
// let array2 = [].concat(array1);
// console.log(array2); // [1,2,3]
// console.log(array1 === array2); // false

// Approach4: using spread operator
// let array1 = [1, 2, 3];
// let array2 = [...array1];
// console.log(array2); // [1,2,3]
// console.log(array1 === array2); // false

// for loop in arrays -------------------------------------------------------------------------------------------
const friends = ["charith", "sarvan", "dheeraj"];
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}

// while loop in arrays -----------------------------------------------------------------------------------------
const friends2 = ["charith", "sarvan", "dheeraj"];
let i = 0;
while (i < friends2.length) {
  console.log(friends2[i]);
  i++;
}
console.log(i); // 3 (will be incremented after exiting the loop)

// for of loop in arrays ----------------------------------------------------------------------------------------
const friends3 = ["charith", "sarvan", "dheeraj"];
for (let friend of friends3) {
  console.log(friend); // charith sarvan dheeraj
}

// for in loop --------------------------------------------------------------------------------------------------
// - prints the index
const schoolFriends = ["dinesh", "kartick"];
for (let index in schoolFriends) {
  console.log(index);
}

// print the array values using for in loop
for (let index in schoolFriends) {
  console.log(schoolFriends[index]); // dinesh kartick
}

// ARRAY DESTRUCTURING ------------------------------------------------------------------------------------------
// - extracting the values of the array and assigning them to new variables \
const teacherNames = ["kmk", "ch", "dd"];
let [teacher1, teacher2, teacher3, ...restItems] = teacherNames;
console.log(teacher1, teacher2, teacher3, restItems); // kmk ch dd []
