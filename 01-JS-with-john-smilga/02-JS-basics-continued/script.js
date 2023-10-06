// STRING PROPS AND METHODS
// - when we create a string in JS, we get access to many properties and methods to work with the string.
const firstName = "    Lakhan";

// length property
// tells the length of the string(including spaces)
console.log(firstName.length); // 10

// toUpperCase() and toLowerCase() methods
console.log(firstName.toUpperCase()); //     LAKHAN
console.log(firstName.toLowerCase()); //     lakhan

// slice() method
// - extracts a part of the string and prints it.
// - It takes staring and ending indexes(but does not include the last index)
// - it won't change the original string.
console.log(firstName.slice(4)); // Lakhan
console.log(firstName.slice(5, 7)); // ak
console.log(firstName.slice(-1)); // n

// trim() method
// - removes the spaces from the string
console.log(firstName.trim()); // Lakhan

// charAt() method
console.log(firstName.charAt(5)); //a

// combining methods and property(length prop) to print the last char of the string
// Note: if u do not write length-1, u get white space printed.
console.log(firstName.charAt(firstName.length - 1)); // n

// indexOf() method
// - gives the index(first intance) of the character. If the char is not present, we get -1
console.log(firstName.indexOf("a")); // 5
console.log(firstName.indexOf("d")); // -1

// includes()
console.log(firstName.includes("akhan")); // true

// TEMPLATE LITERALS --------------------------------------------------------------------------------------------
// - simple version of string concatenation
// - interpolation - insert expressions(values)

// ARRAY PROPERTIES AND METHODS ---------------------------------------------------------------------------------
let names = ["lakhan", "dhanush", "sachin", "charith"];
let clgFriends = ["Santosh", "kartick"];

// length
console.log(names.length); // 4

// last index
console.log(names.length - 1); // 3

// last char
console.log(names[names.length - 1]); // charith

// concat()
// - used to combine multiple arrays
console.log(names.concat(clgFriends)); // [ 'lakhan', 'dhanush', 'sachin', 'charith', 'Santosh', 'kartick' ]

// reverse()
// console.log(names.reverse()); // [ 'charith', 'sachin', 'dhanush', 'lakhan' ]

// push()
// - adds at the end of the array
// - returns the length after adding

// pop()
// - removes from the end of the array
// - returns the removed item

// unshift()
// - adds at the beginning of the array.
// - returns the length after adding.

// shift()
// - removes from the beggining of the array.
// - returns the removed item.

// splice()
// - extracts and creates new array from the array, takes 2 args
// - splice mutates the original array
console.log(names.splice(0, 1)); // [ 'lakhan' ]
console.log(names); // [ 'dhanush', 'sachin', 'charith' ]

// slice()
// - extracts from the array but it does not change the original array.
console.log(names.slice(0, 1)); // [ 'dhanush' ]
console.log(names); // [ 'dhanush', 'sachin', 'charith' ]

// VALUES(PRIMITIVES) VS REFERENCE TYPES -----------------------------------------------------------------------
// - primitives - immutable, stored in stack
// - ref - mutables, stored in heap and stack stores its address

// NULL AND UNDEFINED -------------------------------------------------------------------------------------------
// - both represent no value

// - undefined - when js cannot find value for this
// - variable with no value assigned to it
// - missing function arguement
// - missing object properties

// - null - developer sets the value
console.log(10 + null); // 10
console.log(10 + undefined); // NaN

// TRUTHY AND FALSY VALUES --------------------------------------------------------------------------------------
// - "",'',``,0,-0,false,null,undefined,NaN are all falsy values
// - rest all are truthy values
let lastName = "";
if (lastName) {
  console.log("user filled his lastname");
} else {
  console.log("user did not fill his lastname");
}

// TERNARY OPERATORS --------------------------------------------------------------------------------------------
// - unary operators - has one operand - typeof
// - binary operator - has two operands
// - ternary operator - has three operands
// - syntax - condition?(runs if true):(runs if false);

let drink;
let age = 11;
drink = age >= 10 ? "can drink juice" : "cannot drink juice";
console.log(drink);

// GLOBAL SCOPE -------------------------------------------------------------------------------------------------
// - any variable outside the code block {} is said to be in global scope
// - can be accessible anywhere in the program
// gotchas: name collisions, modify by mistake

// LOCAL SCOPE --------------------------------------------------------------------------------------------------
// - variable inside the code block {} is said to be in local scope
// - it can be only accessed within the code block. we cannot access them outside
// - no issues of name collisions

// VARIABLE LOOKUP ----------------------------------------------------------------------------------------------
// - JS looks for the variable in the local scope, if its not present in local scope,
// - it will look in the global scope. if it is not present in the global scope, throws reference error.

// FUNCTIONS ARE FIRST-CLASS-OBJECTS ----------------------------------------------------------------------------
// - stored in a variable(expressions)
// - passed as an arg to another function
// - return from the function(closure)

// HIGHER ORDER FUNCTIONS ---------------------------------------------------------------------------------------
// - accepts another function as an arguement

// CALLBACK FUNCTION --------------------------------------------------------------------------------------------
// - passed to another function as an arg and executed inside that function.
function greetMessage(name) {
  return `Good morning, ${name}`;
}
function greet(callBack) {
  return callBack("Lakhan");
}
console.log(greet(greetMessage));

// ARRAY ITERATORS ----------------------------------------------------------------------------------------------
// forEach, map, filter, find, reduce

// forEach
// - built in function used to iterate over the array.
// - takes an cb function
// - does not return a new array.
const students = [
  { name: "Lakhan", age: 22, class: 10 },
  { name: "Sarvan", age: 51, class: 10 },
  { name: "Charith", age: 624, class: 10 },
];

// forEach (without returning anything)
students.forEach((student) => {
  console.log(student.name); // Lakhan, Sarvan, Charith
});

// below is the proof that the forEach does not return anything, u get undefined
const foreachStu = students.forEach((student) => {
  return student.name;
});
console.log(foreachStu); // undefined

// Map method --------------------------------------------------------------------------------------------------
// - built in function used to iterate over the array items
// - returns a new array
// - does not change the size of the original array
// - uses values from the original array when making new one

const mapped = students.map(function (student) {
  return student.age;
});
console.log(mapped); // [ 22, 51, 624 ]

// filter method ------------------------------------------------------------------------------------------------
// - returns new array
// - returns based on a condition
// - array size may be changed
const youngDevs = students.filter(function (student) {
  return student.age <= 25;
});
console.log(youngDevs); // [ { name: 'Lakhan', age: 22, class: 10 } ]
console.log(Array.isArray(youngDevs)); // true
console.log(youngDevs.name); // undefined

// find method --------------------------------------------------------------------------------------------------
// - returns object
// - returns first match, if no match returns undefined
// - great for getting unique value
const studentSarvan = students.find(function (student) {
  return student.name === "Sarvan";
});
console.log(studentSarvan); // { name: 'Sarvan', age: 51, class: 10 }
console.log(Array.isArray(studentSarvan));
console.log(studentSarvan.name); // Sarvan

// reduce method ------------------------------------------------------------------------------------------------
// - reduces to a single value
// - takes cb func
// - 1st param - acc - total of all calculations
// - 2nd parma - curr - current iteration/value
const products = [
  { productName: "monitor", price: 12000 },
  { productName: "keyboard", price: 1000 },
  { productName: "mouse", price: 800 },
];

const totalPrice = products.reduce((acc, curr) => {
  console.log(curr);
  acc += curr.price;
  return acc;
}, 0);

console.log(`Total price is:${totalPrice}`);

// MATH OBJECT --------------------------------------------------------------------------------------------------
// - standard built-in objects to perform math ops
// - Math.floor() - rounds down
// - Math.ceil() - rounds up
// - Math.min() - gives us mininum number
// - Math.max - gives us max number
// - Math.random() - generates random number 0 to 0.99999
// - If we want random num from 0-10
// - we need to multiply with 10
// - we also need to use floor,
// - if we use floor we will only get from 0 to 9 but, we want 0-10,
// - so we add with one.
console.log(Math.floor(Math.random() * 10 + 1));

// DATE OBJECT --------------------------------------------------------------------------------------------------
const date = new Date();
