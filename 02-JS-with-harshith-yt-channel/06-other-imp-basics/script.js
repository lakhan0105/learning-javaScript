// ITERABLES AND ARRAY LIKE OBJECTS -----------------------------------------------------------------------------
// Iterables
// - on which we can apply for of loop
// - srings, arrays are iterables

// Array like objects
// - which has length property
// - which can be accessed using index
// - strings

// SETS ---------------------------------------------------------------------------------------------------------
// - It is also iterable
// - stores data
// - when u pass an arguement, we need to pass only iterables.
// - no index based access
// - no duplicates are allowed(only unique items)
// - order is not guarenteed

// creating a set
const numbers = new Set([1, 2, 3]);
console.log(numbers); // Set(3) { 1, 2, 3 }

// create a set and try to pass number data type as an arguement in it.
// const nums = new Set(1, 2, 3);
// console.log(nums); // ERROR: number 1 is not Iterable

// set.add()
// - used for adding items to the set
// - we can pas even number data types unlike passing number data types as args
// - we cannot pass multiple elements at once
numbers.add(10, 70, "new item");
console.log(numbers); // Set(4) { 1, 2, 3, 10 } adds only 10

// add 70 using set.add()
numbers.add(70);
numbers.add("new item");
console.log(numbers); // Set(6) { 1, 2, 3, 10, 70, 'new item' }

// check if an el is present in a set or not
// we use set.has() method which returns true/false
numbers.has(70); // does not print anything
console.log(numbers.has(70)); // true

// use for of loop on sets (cuz it is iterable)
for (let item of numbers) {
  console.log(item); // 1 2 3 10 70 new item
}

// When do we use set?
// - when we need unique values
// - when we do not need duplicate values
// - ex: userids

// we cannot use length proeprty on them
// - if u want to find the length of the set, use for of loop and and add length++ in it

// MAP DATA STRUCTURE -------------------------------------------------------------------------------------------
// - In normal object literals, the keys are of string/symbol data types
// - Map also store key value pairs

// cerate a map
const person = new Map();

// add key value pairs in it
person.set("firstName", "Lakhan");
console.log(person); // Map(1) { 'firstName' => 'Lakhan' }

// add key of diffrent data type other than string
person.set(1, "number");
console.log(person); // Map(2) { 'firstName' => 'Lakhan', 1 => 'number' }

// Major diff b/t map and object
// - we can store keys with any data types in map, whereas we can store only string keys in obj literals

// ACCESSING THE MAP VALUES
console.log(person.get("firstName")); // Lakhan
console.log(person.get(1)); // number

// PRINT ALL THE KEYS OF THE MAP OBJ
console.log(person.keys()); // [Map Iterator] { 'firstName', 1 }

// LOOPING THE MAP
// we use for in loop for normal obj literals
// we use for of loop for map ds
// - we will get an array with key and value names
for (let key of person) {
  console.log(key);
}

// o/p
// ["firstName", "Lakhan"] [(1, "number")];

// CLONING USING Object.assign() --------------------------------------------------------------------------------
// REVISE AGAIN 

// OPTIONAL CHAINING --------------------------------------------------------------------------------------------
// - Optional chaining in JavaScript is a feature that allows you to safely access properties or methods of an object without causing an error if the property or method doesn't exist. 
// - It uses the ?. notation to check if the preceding object is defined before attempting to access its properties or methods. 
// - If the object is undefined, it returns undefined instead of throwing an error.

// -- 