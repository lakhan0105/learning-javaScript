// HOW TO ADD JS
// Inline
// JS is added to the element
// <h1 onclick="alert('hey')">heading</h1>

// Internal
// JS is added in the script tag of the html doc
// document.querySelector("h1").addEventListener("click", function () {
//   alert("internal js");
// });

// External
// JS is added in a separate .js file and is linked in the html doc

// HELPER METHODS -------------------------------------------------------------------------------------
// document.write("hello world") // writes on the web page
// alert("hello world");         // displays a pop-up with ok and cancel buttons
// console.log("hello");         // writes on the console of the browser

// ADVANTAGE OF console.log(); OVER OTHERS ------------------------------------------------------------
// - we can print objects in console.log();, we cannot do that in others.
// - helps in debugging

// STATEMENTS AND COMMENTS -----------------------------------------------------------------------------
// EXPRESSIONS -  returns a value
// - 1+1
// - "hello"
// - true
// - f()

// STATEMENTS  - complete task instruction
// - let f = function() // statement

// COMMENTS    - lines ignored by js
// - for documentation
// - for debugging
// - better readability

// VARIABLES --------------------------------------------------------------------------------------------
// - helps us to store, access and Modify the values.
// - DECLARE -> let firstName;
// - DECLARE, Assignment op, value -> let firstName = "Lakhan";
// - ADVANTAGE - when we need to change something like person's name, we just need to modify one time and everywhere else will be changed.

// ASSIGN VARIABLE VALUES LATER -------------------------------------------------------------------------
let address;
address = "bangalore";
console.log(address);

// RULES FOR NAMING THE VARIABLES -----------------------------------------------------------------------
// - cannot start with numbers
// - only numbers, letters, $ or _ can be included.
// - must follow camel casing
// - variable names are case sensitive
// - var names cannot be reserved keywords

// const, let and var KEYWORDS --------------------------------------------------------------------------
// - we were using var before untill let and const came in es6
// - var - function scoped, can be reassigned, redeclared
// - let - block scopeded, can be reassigned, cannot be redeclared
// - const - block scoped, cannot be either reassigned/redeclared.
// - which one to use?
// - majority of the devs, use const, if the value is going to be changed in the future, use let.
// - var is ignored as it is not safe to use as we might redeclared accidently

// QUOTATION MARKS --------------------------------------------------------------------------------------
// - we can use either of them,
// - only thing we need to note that the starting and the ending quotation should be same
// - we cannot mix
// - what to do when we need to use quotation mark inside the string?
// - we use escape char \' like "lakhan\'s" and js would treat \' as '

// STRING CONCATENATION ----------------------------------------------------------------------------------
// - combining string values

// NUMBERS -----------------------------------------------------------------------------------------------
// - Numbers can be inetegers/decimals in js
// - JS is a loosely typed language - we do not need to declare the type of the variable
const num = 10;
let pants = 55;
pants = "are great";

console.log(num); // 10
console.log(pants); // are great

// Numbers additional features
// +=, -=, *=, /=, ++, --, %
// Modulus - returns the remainder after integer division
// lets say u need to divide 10slices of pizzas for 3 childrens, and we need to give the remaing pizza to the teacher
console.log(10 % 3); // 1 -> which is for the teacher

// IMPLICIT TYPE CONVERSION ------------------------------------------------------------------------------
// JS automatically converts a data type to another data type
console.log("5" - "5"); // 0 (implicit conversion)
console.log("firstName" - "lastname"); // NaN

// Implicit conversion happens in our code, for ex when we are fetching data from the server, it is of string type and we would need to convert them to numbers. so it is important

// DATA TYPES --------------------------------------------------------------------------------------------
// Primitives - String, Numbers, Booleans, Null, undefined, Symbol
// Ref - objects, arrays, functions

// ARRAYS ------------------------------------------------------------------------------------------------
// - Ordered collection of items
// - we can store any data types in arrays
// - Arrays are zero index based

// - Lets say u wanna save group of friends
const friends = ["Dionesh", "Sarvan", "charith"];

// Accessing the array items
// When u try to access the array item which does not exist, u will get undefined
console.log(friends[0]); // Dinesh

// Changing the array items
friends[0] = "new friend";
console.log(friends); // ['new friend', 'Sarvan', 'charith']

// FUNCTIONS ----------------------------------------------------------------------------------------------
// - allows us to write block of code which can be reused any number of times
// Declare
function hello() {
  console.log("Hello! Lakhan");
  console.log("Hello! Sarvan");
}

// Invoking the function
hello();
hello();

// FUNCTIONS - PARAMS, ARGS ---------------------------------------------------------------------------------
// - params - while declaring the function
// - args - while invoking the function
function greet(name) {
  console.log("hello", name);
}
greet("Lakhan"); // hello Lakhan

// - when u have defined a param and u do not pass any arg, you get undefined

// FUNCTIONS - RETURN ---------------------------------------------------------------------------------------
// - ends the function and returns something from that function
// - if u do not return anything, the function will return undefined by default

// FUNCTION EXPRESSIONS -------------------------------------------------------------------------------------
// - function is assigned to a variable and the variable acts as a function
// - diff - hoisting
const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum); // prints the function
console.log(sum(1, 1)); // 2

// OBJECTS ---------------------------------------------------------------------------------------------------
// - unordered collection of key and value pairs
// - useful in real world data

const person = {
  name: "Lakjhan",
  age: 44,
  hello: function () {
    console.log("hello from obvjh");
  },
};

// accessing the object
console.log(person);
console.log(person.age);

// accessing the methods from the obj
console.log(person.hello()); // undefined and hello from obvjh
person.hello(); // hello from obvjh
