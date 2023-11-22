/*
// HELLO WORLD
// alert("Hello world!");

// A BRIEF INTRO TO JAVASCRIPT
// What is JS
// - High-level, obj-oriented, multi-paradigm programming language
// - High level- we do not need to think abt complex stuff like mem management etc..
// - Obj Oriented - lang is based on objs on storing most of the data

// Role of JS in web dev
// - JS helps in functionality and making the web page dynamic
// - JS can be runned on servers using node.js

// LINKING A JS FILE
// - Inline JS - JS is written in the element.
// - Internal JS - JS is written in the <script> tag
// - External JS - JS is written in a separate .js file and is linked in the HTML doc.

// VALUES AND VARIABLES
// - Value
// -- A piece of data, which can be stored in a variable
// -- Ex: 1, "lakhan", 22, true etc...

// - Variables
// -- used to store/access/modify the information
// -- we can use that variables repeatedly
const firstName = "Lakhan";
console.log(firstName); // Lakhan

// Rules for naming variables
// - camel casing
// - case sensitive
// - must only have letters, digits and symbols $ and _
// - no special symbols except $ and _
// - var names must not start with a number
// - var names cannot be a reserved keyword

// DATA TYPES
// - Primitives
// - Nums - Floating point numbers - decimals and integers
// - String - group of chars in quotes
// - Booleans - true/false, for taking decisions
// - undefined - varibale with no value assigned to it.
// - null - means empty value
// - Symbol
// - BignInt

// - Dynamic typing
// - you do not need to mention the type of the variable
// - so value has a type in JS, not the variable
// - also we can assign new data type for the same variable later in the code

// let, const and var KEYWORDS IN JS
// - let - block scoped, can be reassigned and undefined, cannot be redeclared.
// - const - block scoped, cannot be reassigned or redeclared or undefined.
// - var - func scoped, can be reassigned and redeclared and undefined.

// - Which one to use?
// -- we use const by default and if the variable could change in the future, we use let
// -- Its because we do not want more mutations of the varibales

// BASIC OPERATORS
// - Arithmetic operators
// - Assignment operators  // =, +=, *=
// - Comparision operators // >, >=, <, <=

// OPERATOR PRECEDENCE
// - math ops have more precedence over the comparisons ops (left to right)
// - Assignment op = right to left
// Example
let x, y;
x = y = 5 + 10 + 10; // x = y = 25
console.log(x, y); // 25,25

// STRINGS AND TEMPLATE LITERALS
const firstName = "Lakhan";
const job = "student";
const birthYear = 2001;

// String concatenation
const lakhan =
  "I'm " + firstName + " a " + (2022 - birthYear) + "year old " + job;
console.log(lakhan); // I'm Lakhan a 21year old student

// Template Literals
// - easier version of joining the strings 
// - we can create multi line strings using them. (used to create HTML el)
// - it has interpolation 
const newLakhan = `I'm ${firstName}, a ${2022 - birthYear} year old ${job}`;
console.log(newLakhan); // I'm Lakhan, a 21 year old student

// TAKING DECISIONS
const age = 19;
if (age >= 18) {
  console.log("You are eligible for DL");
} else {
  console.log("Not eligible");
}

// TYPE CONVERSION AND TYPE COERSION
// TYPE COERSION - When JS automatically converts one data type to another data type.
console.log(1 + "1"); // '11'

// Note: not all the ops do type coersion
console.log("10" - "9"); // 1 (not "1")
console.log("10" - "9" + 1); // 2

// TYPE CONVERSION - When we manually convert the data type to another.
console.log(String(1) + 25); // '125'

// TRUTHY AND FALSY VALUES
// Falsy -> 0, false, null, undefined, NaN, ""
// Truthy -> everything except falsy

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(-1)); // true

const height = 0;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is not defined"); // this block runs as height=0
}
*/

// == vs ===
// == check only the value, not the data type (does type coersion)
// === checks both, the value and data type (does not do type coersion)
console.log(10 == "10"); // true (wrong ans)
console.log(10 === "10"); // false (correct ans)
