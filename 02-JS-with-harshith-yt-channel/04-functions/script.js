// FUNCTIONS
// - block of code that can be reused again and again

// FUNCTION DECLARATION -----------------------------------------------------------------------------------------
// write a function to print happy birthday
function singHappyBirthday() {
  console.log("Happy birthday...");
}
singHappyBirthday(); // Happy birthday...

// parameter - one that we pass while declaring the function
// arguement - one that we pass while invoking the function

// Function
// input: array, target
// output: index of the target if it is present in the array
function findChar(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    } else {
      return -1;
    }
  }
}

console.log(findChar([1, 2, 3], 1)); // 0
console.log(findChar([1, 2, 3], "1")); // -1

// FUNCTION EXPRESSION ------------------------------------------------------------------------------------------
// - The function is assigned to a variable.
const greet = function () {
  console.log("hello world");
};
greet(); // hello world

// ARROW FUNCTION -----------------------------------------------------------------------------------------------
// - It is a way of writing function in which, the function keyword is removed and an arrow sign is placed
// - Shortforms of writing the arrow function
// - when there is only one param, we can remove the the ()
// - when there only one return, we can remove the {} and the return keyword in the arrow function

// HOISTING -----------------------------------------------------------------------------------------------------
// Observation 1
// - The function declaration, when invoked before declaring does not throw error
// - But, function exp and arrow functions give error when it is called before declaring
hello(); // hello
function hello() {
  console.log("hello");
}

// Observation 2
// - When a variable declared using var is used before declaration, it gives undefined
// - When a variable declared using let,const is used before declaration, it gives error

// in case of var
// console.log(firstName); // undefined
// var firstName = "ss";

// in case of let
// console.log(firstName); // ERROR
// let firstName = "ss";

// FUNCTIONS INSIDE FUNCTIONS -----------------------------------------------------------------------------------
const app = function () {
  const myFunc = () => {
    console.log("Hello from myfunc");
  };

  const addTwo = () => {
    console.log(2 + 2);
  };

  console.log("inside app");
  myFunc();
  addTwo();
};
app();

// Order
// app() -> myFunc() -> addTwo()

// LEXICAL SCOPING ----------------------------------------------------------------------------------------------
// - the varible/func is accessible only in the code only where it is defined.
// - it cannot be accessed outside
function myApp() {
  const myVar = "some value";
  function myFunc() {
    const myVar = "value22";
    console.log(myVar);
  }

  console.log(myVar);
  myFunc();
}

myApp();

// Order
// some value value22

// BLOCK SCOPE VS FUNCTION SCOPE --------------------------------------------------------------------------------
// [DOUBT]
// - let and const are block scoped
// - means we cannot access the varibale with let and const outside the code block
// - var is function scoped

// DEFAULT PARAMETERS -------------------------------------------------------------------------------------------
// - when the user does not pass any arg, the default parameters value is considered.
function sum(a, b = 3) {
  console.log(a + b);
}

// try not passing in the second arguement
sum(5); // 8

// REST PARAMETERS ----------------------------------------------------------------------------------------------
// - when there are more args passed by the user, the args values are stored in a array
// - useful when we do not know the no of args we are going to pass.
function addNumbers(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  console.log("the total sum is", total);
}

addNumbers(1, 2, 3); // 6

// PARAMETER DESTRUCTURING --------------------------------------------------------------------------------------
// - we use this more on the objects 
// - we directly extract the values of the variable in the parameter itself 

// CALLBACK FUNCTIONS -------------------------------------------------------------------------------------------
// - Functions that are passed as an arg to another function 