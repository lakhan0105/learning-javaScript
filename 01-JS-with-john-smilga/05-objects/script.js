/*
// Objects
// - collection of keys and value pairs
// - the functions are called methods

// object literal syntax
// const obj = {};

// const person = {
//   name: "Lakhan",
//   age: 22,
//   friends: ["dheeraj", "sarvan"],
//   greet: function (name) {
//     console.log(`Hello ${name}`);
//   },
// };

// Nested objects ---
// set variables as property values (using bracket notation)
// dot vs bracket notation

// "this" keyword basics --
// - points to the obj left of the dot
const john = {
  firstName: "John",
  lastName: "anderson",
  fullName() {
    console.log(`My fullName is ${this.firstName} ${this.lastName}`);
  },
};

const bob = {
  firstName: "bob",
  lastName: "sanders",
  fullName() {
    console.log(`My fullName is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName(); // John anderson
bob.fullName(); // bob sanders

// ---------------------------------------------------------------------
// 'this' in case of reg functions is determined by
// "How a function is invoked (left of .)"

// console.log(this); // window

function showThis() {
  console.log(this);
}

const person1 = {
  name: "Lakhan",
  showThis: showThis,
};

person1.showThis(); // this points to person1
showThis(); // this points to the window
// btn.addEventListerner('click', showThis); // this points to the btn
// btn.addEventListerner('click', function(){}); // this points to window

// FACTORY FUNCTIONS ----------------------------------------------------
function createUsers(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    about() {
      console.log(`user name is ${this.firstName}`);
    },
  };
}

const user1 = createUsers("Lakhan", "Kumar");
user1.about(); // user name is Lakhan

const user2 = createUsers("sarvan", "singh");
user2.about(); // user name is sarvan

// CONSTRUCTOR FUNCTIONS -------------------------------------------------
// new - creates obj, points to it, returns it
// we do not need to create/retrun a obj here
// - if we do not use new, this will pointt to global obj.
function CreateUsers(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.about = function () {
    console.log(`user name is ${this.firstName} ${this.lastName}`);
  };
}

const user3 = new CreateUsers("dheeraj", "sharma");
user3.about(); // user name is dheeraj sharma

const user4 = new CreateUsers("charith", "M");
user4.about(); // user name is charith M

// CONSTRUCTOR PROPERTY ---------------------------------------------
// - All objs in js have access to the construtor function that created it.
// - we can see that using construtor property
console.log(user3.constructor); // prints CreateUsers function on the console
*/

// PROTOTYPAL INHERITANCE MODAL ----------------------------------------
// every constructor function/class has a prototype property that is shared by every instance of the const/class
// every property/methods in prototype can be accessed by every instance
// prototype property returns an object

function Account(name, intialBalance) {
  this.name = name;
  this.balance = intialBalance;
  //   this.deposit = function (depositAmt) {
  //     this.balance += depositAmt;
  //     console.log(`Balance is ${this.balance}`);
  //   };
}

Account.prototype.bankName = "LBW Bank";
console.log(Account.prototype); // {bankName: 'LBW Bank', constructor: ƒ}

// create a fucntion in prototype
Account.prototype.deposit = function (depositAmt) {
  this.balance += depositAmt;
  console.log(`Balance is ${this.balance}`);
};

const john = new Account("John", 5000);
john.deposit(5000); // Balance is 10000
