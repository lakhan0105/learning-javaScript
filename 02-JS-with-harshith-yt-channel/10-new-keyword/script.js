// NEW KEYWORD --------------------------------------------------------------------------------------------------

// create a function
function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}

// without new keyword
// const user1 = createUser("Lakhan", 22);
// console.log(user1); // undefined

// with new keyword
// - new keyword creates a empty object this={}
// - sets the key values
// - automatically links the prototype in the __proto__
// - returns this
const user1 = new createUser("Lakhan", 55);
console.log(user1); // createUser {firstName: 'Lakhan', age: 55}

// now add methods to prototype
createUser.prototype.about = function () {
  console.log(`${this.firstName} is ${this.age} years old`);
};
user1.about(); // Lakhan is 55 years old

// MORE ABOUT PROTOTYPE -----------------------------------------------------------------------------------------
// - we know that only functions have prototype
// - when we create an array, and we use various methods on them like slice() etc...
// - these array methods are stored in the prototype of the array
// - but, we learnt that array does not have any prototype, so where how does it store in a prototype?
// - when we create an array, in the background it is created like
const numbers = new Array([1, 2, 3]);
// - here, the Array is a constructor function(like createUser() constructor func) which helps us create array
// - the Array constructor func, has prototype in which all these methods are stored.
console.log(Array.prototype); // [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, …]

