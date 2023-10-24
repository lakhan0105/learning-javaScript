// FUNCTIONS IN JS
// - IIFE
// - HOISTING
// - CLOSURES

// IIFE -------------------------------------------------------------------
// - Immediately invoked function expression
// - it is a older approach (new-modules)
// - simple approach to reduce global scope pollution

// without IIFE
const num1 = 30;
const num2 = 22;
function add() {
  console.log(`Result is ${num1 + num2}`);
}
add();

// same thing using IIFE
// - here we cannot use num1 and num2 outside the function.
(function () {
  const num1 = 10;
  const num2 = 10;
  console.log(`Result is ${num1 + num2}`);
})(); // Result is 20

// HOISTING -------------------------------------------------------------------
// - funcs and var declarations are hoisted
// - we can access the var and function declaration even before decalring them
// - var -> undefined
// - let and const -> ERROR: cannot access before init
// - function declaration -> runs as it is

// CLOSURES --------------------------------------------------------------------
// - Closures gives us access to an outer function's scope from an inner function.
// - when a func is retruned from an function, it also atkes the variables from its lexical scope with it
function outer() {
  const privateVar = 10;
  function inner() {
    console.log(`hello there secret is ${privateVar}`);
  }
  return inner;
}

const ans = outer();
ans(); // hello there secret is 10

// CLOSURES EXAMPLE
/*
function newAccount(name, initialBal) {
  let balance = initialBal;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBalance;
}

const user1Account = newAccount("LK", 5000); 
const user2Account = newAccount("Sarvan", 1000); 

user1Account(); // Hey LK, your balance is 5000
user2Account(); // Hey Sarvan, your balance is 1000
*/

// CLOSURES EXAMPLE 2
// - we want to invoke as methods
function newAccount(name, initialBal) {
  let balance = initialBal;

  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }

  function deposit(depositAmt) {
    balance += depositAmt;
    console.log(`You deposited ₹${depositAmt}, avBal:${balance}`);
  }

  function withdraw(withdrawAmt) {
    if (withdrawAmt > balance) {
      console.log(`Sorry, you do not have ${withdrawAmt} in you account!`);
    } else {
      balance = balance - withdrawAmt;
      console.log(`You withdrawed ₹${withdrawAmt}, avBal:${balance}`);
    }
  }
  return { showBalance: showBalance, withdraw, deposit };
}

const user1 = newAccount("LK", 5000);
const user2 = newAccount("Sarvan", 1000);

user1.showBalance(); // Hey LK, your balance is 5000
user2.showBalance(); // Hey Sarvan, your balance is 1000

user1.deposit(5000); // You deposited ₹5000, avBal:10000
user1.withdraw(7000); // You withdrawed ₹7000, avBal:3000

user2.withdraw(1000); // You withdrawed ₹1000, avBal:0
user2.withdraw(1000); // Sorry, you do not have 1000 in you account!

// Note:
// - Closures are often used for maintaining state and creating private variables,
// - while classes are used for creating blueprints for objects with shared behavior and state.
