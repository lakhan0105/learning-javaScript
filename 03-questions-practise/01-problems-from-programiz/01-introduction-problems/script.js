// COMMENT THE CODE BEFORE USING THEM

// INTRODUCTION PROBLEMS -------------------------------------------------------------------------------------
// PRINT HELLO WORLD
console.log("Hello world"); // we can also use alert() and doc.write()

// ADD TWO NUMBERS (ENTERED BY USER) -------------------------------------------------------------------------
const num1 = prompt("Enter num1 value:");
const num2 = prompt("Enter num2 value:");
console.log(Number(num1) + Number(num2)); // 5,5=10

// FIND THE SQUARE ROOT --------------------------------------------------------------------------------------
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(-0)); // -0
console.log(Math.sqrt(-4)); // NaN (sqrt of -ve number  = NaN)
console.log(Math.sqrt("hello")); // NaN (sqrt of string = NaN)

// FIND THE AREA OF A TRIANGLE -------------------------------------------------------------------------------
// - When base and height is known, formula = 1/2*b*h
const base = 4; // Enter base
const height = 6; // Enter height
const area = (1 / 2) * base * height;

console.log(
  `Area of a triangle of base:${base} & height:${height} is : ${area}`
);

// - When all sides are known
// - Note: pass thesides such that a triangle can be formed, else the pgm won't run
// - we can find using Heron's formula
// - s = (a+b+c)/2
// - area = sqrt(s*(s-a)*(s-b)*(s-c))
const a = 3;
const b = 4;
const c = 5;
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`Area of the triangle is: ${area}`); // 6

// SWAP TWO VARIABLES ----------------------------------------------------------------------------------------
// Using temp variable
let num1 = 1;
let num2 = 2;
let temp;

temp = num1;
num1 = num2;
num2 = temp;
console.log(`num1:${num1}, num2:${num2}`);

// Using destructuring ---------------
let num1 = 1;
let num2 = 2;
[num1, num2] = [num2, num1];
console.log(num1, num2); // 2 1

// CONVERT KM TO MILES ---------------------------------------------------------------------------------------
// formula: 1km is 0.621miles
const kmValue = 2.2;
const miles = kmValue * 0.621;
console.log(`${kmValue}kms is ${miles}miles`);

// CONVERT CELCIUS TO F --------------------------------------------------------------------------------------
// FORMULA => fahrenheit = celsius * 1.8 + 32;
// Note: far into cel celsius = (fahrenheit - 32) / 1.8
const cel = 55; // user input
const f = cel * 1.8 + 32;
console.log(`${cel}Celcius is ${f}Far`); // 131Far

// WORKING WITH CONSTANTS ------------------------------------------------------------------------------------
// In array constants, their value can be changed but their reference cannot be changed.
// const must be initialised

// PROGRAM TO WRITE IN THE CONSOLE ---------------------------------------------------------------------------
console.log("something in the console");
