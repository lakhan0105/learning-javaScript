// CREATING OBJS USING NORMAL OBJ LITERALS ---------------------------------------------------------------------
const user = {
  firstName: "Sarvan",
  lastName: "Singh",
  age: 22,
  email: "lakhan0105@gmail.com",
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
};
console.log(user.about()); // Sarvan is 22 years old

// Problem
// - i want to create 1000s of users obj like these
// - we cannot sit and type the whole thing 1000 times, so we have a better solution
// - we will create a func, that takes i/p like age etc.. and returns an object
// - create an obj, adds key values, and returns

/*
// CREATE A FUNCTION TO CREATE OBJECTS --------------------------------------------------------------------------
function createUser(firstName, lastName, age) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.about = function () {
    console.log(`${this.firstName} is ${this.age} years old`);
  };
  return user;
}

const user1 = createUser("Dinesh", "king", 22);
const user2 = createUser("Sachin", "SH", 44);

console.log(user1); // { firstName: 'Dinesh', lastName: 'king', age: 22 }
user1.about(); // Dinesh is 22 years old
console.log(user2); // { firstName: 'Sachin', lastName: 'SH', age: 44 }

// Problem with this approach 
// - how many time we create new user obj, that many times the mehods in the createuser func is created
// - it causes repetetion and too much space in storage 
*/

// STORING THE METHODS IN DIFFERENT OBJECTS ---------------------------------------------------------------------
// - we store the methods in a obj and reference them in the createUser function (instead of reperating them again and again)
/*
const methods = {
  about: function () {
    console.log(`${this.firstName} is ${this.age} years old`);
  },
};

function createUser(firstName, lastName, age) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.about = methods.about;
  return user;
}

const user1 = createUser("Dinesh", "king", 22);
const user2 = createUser("Sachin", "SH", 44);

console.log(user1); // user1 obj
user1.about(); // Dinesh is 22 years old

console.log(user2); // user1 obj
user2.about(); // Sachin is 22 years old
*/

// Problem
// - when we create a method in method obj, we need to mention that method in the createUser function
// - so for every method we add in the method, it is diff to metion that method in the func
// - solution - object.create

// Object.create(otherobj); -------------------------------------------------------------------------------------
// - if i do not get the key in a obj, i want to search that key in other object. can be acheived using Object.create();
// - Object.create() is used for
// - creating an empty obj
// - linking/chaining with another object

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key3: "value3",
};

console.log(obj2.key3); // value3
console.log(obj2.key1); // undefined

// use Object.create and search for key1 in obj3
const obj3 = Object.create(obj1);
console.log(obj3); // {}
console.log(obj3.key1); // value1
console.log(obj3.__proto__); // { key1: 'value1', key2: 'value2' }

// Note
// __proto__ is same as [[prototype]] -> saves the reference and other stuff
// prototype is different from (__proto__ and [[prototype]])

// Solution using Object.create() -------------------------------------------------------------------------------
const methods = {
  about: function () {
    console.log(`${this.firstName} is ${this.age} years old`);
  },
};

function createUser(firstName, lastName, age) {
  const user = Object.create(methods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  return user;
}

const user1 = createUser("Dinesh", "king", 22);

console.log(user1); // user1 obj
user1.about(); // Dinesh is 22 years old

