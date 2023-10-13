// PROTOTYPE ----------------------------------------------------------------------------------------------------
// - In JS, a function is treated as an function + object
// - Proof -> try applying name property -> which gives the name of the obj
function hello() {
  console.log("Hello world");
}
console.log(hello.name); // hello

// function also provides us more properties and methods like call(), apply(), bind()
// add your own property in the function, like objects
hello.myOwnProp = "this is my own property";
console.log(hello.myOwnProp); // this is my own property

// Prototype
// - function provides us an empty object {}, which is called as prototype
// - when we need to add any key value pairs later, we can add them to the prototype of the func
// - on logging, the value of the prototype is a constructor, whose value is also the function itself
// - Note: only functions provide prototype property
console.log(hello.prototype); // {constructor: ƒ}
hello.prototype.key1 = "value1"; // {constructor: ƒ, key1:"value1"}

// How to check if anything is present in the prototype of an function
if (hello.prototype) {
  console.log("Something in prototype is present");
} else {
  console.log("Prototype is empty");
}

// Difference b/t __proto__ and prototype
// - proto is refernece, prototype is empty obj where we can store anything.
// - they both do not have any connection b/t them, but we can create a connection b/t them.

// - Now instead of storing the methods in the method{} obj, store them in the prototype obj
function createUser(firstName, lastName, age) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  return user;
}

// set the method in prototype of the createUser func
createUser.prototype.about = function () {
  console.log(`${this.firstName} is ${this.age} years old`);
};

// creare user1 obj from the createUser function
const user1 = createUser("Lakhan", "Kumar", 44);
console.log(user1);

// print the prototype of createUser func
console.log(createUser.prototype); // {about: ƒ, constructor: ƒ}

// Note: prototype is for createuser not for user1(cuz its an obj)
// console.log(user1.prototype); // undefined

// use the method in the user1 obj
user1.about(); // Lakhan is 44 years old
