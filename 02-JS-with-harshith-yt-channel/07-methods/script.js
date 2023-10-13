// CREATE YOUR OWN METHODS --------------------------------------------------------------------------------------

// METHODS
// - they are function inside an object

// create a object
// const person = {
//   firstName: "Lakhan",
//   age: 55,
//   about: function () {
//     console.log(`Person name is ${this.firstName} and age is ${this.age}`);
//   },
// };

// accessing the method
// person.about(); // Person name is Lakhan and age is 55

// this keyword -------------------------------------------------------------------------------------------------
// - refers to the current object it is attached to
// - the value of 'this' is determined on runtime
// - when u need to use the same func for multiple objects, this becomes useful

// Example
const personInfo = function () {
  console.log(`Person name is ${this.firstName}, and age is ${this.age}`);
};

const person1 = {
  firstName: "Lakhan",
  age: 55,
  about: personInfo,
};

const person2 = {
  firstName: "Dinesh",
  age: 54,
  about: personInfo,
};

person1.about(); // Person name is Lakhan, and age is 55
person2.about(); // Person name is Dinesh, and age is 54

// Point to remember
// function myFunc() {
//   console.log(this);
// }
// myFunc(); // window object

// CALL, APPLY, BIND --------------------------------------------------------------------------------------------
// - we can invoke the method in the obj using call() and we will get same result
// function myFunc() {
//   console.log("Hello");
// }
// myFunc.call(); // Hello

// call()
// - we can change the this for the object
// - if we want to use the function of one obj inside another obj, we can use call()
const user1 = {
  firstName: "Charith",
  age: 44,
  about: function (hobby, place) {
    console.log(`person name is ${this.firstName} ${hobby} ${place}`);
  },
};

const user2 = {
  firstName: "Prakash",
  age: 44,
};

// use the about function in user2 obj
user1.about.call(user2, "cricket", "london"); // person name is Prakash cricket london

// Point to remember
// - what will happen if no arg provided in call()
user1.about.call(); // person name is undefined undefined undefined

// apply()
// - same as call, but the args are passed in as array
user1.about.apply(user2, ["cooking", "USA"]); // person name is Prakash cooking USA

// bind()
// - same as call, but it returns a func, and we can call that func anytime we want
const func = user1.about.bind(user2, "hockey", "USA");
func(); // person name is Prakash hockey USA

// ARROW FUNCTIONS ----------------------------------------------------------------------------------------------
// - arrow func takes this from surroundings 
const user3 = {
  firstName: "Sachin",
  age: 51,
  about: () => {
    console.log(this);
    console.log(this.firstName, this.age);
  },
};

user3.about(); // Window, undefined undefined
user3.about.call(user3); // undefined (u cannot change the this, even using call())
