// INTRO TO OBJECTS ---------------------------------------------------------------------------------------------
// - Unordered collection of keys and value pairs

// Why do we need objects inspite of having arrays?
// - arrays are not enough for storing real world data.
// -

// create a object
const person = {
  name: "Lakhan",
  age: 44,
};

// accessing the object keys and value pairs
console.log(person.name); // Lakhan

// add key value pairs
person.lastName = "Kumar";
console.log(person.lastName); // Kumar

// dot vs bracket notation
// - we need bracket notation for naming the object key with more than one word
// - we need it to set the key values dynamically.
// lets say you want a key named email from an variable, we need bracket notation
const key = "email";
person[key] = "lakhan@ggmaikl.com";
console.log(person); // { name: 'Lakhan', age: 44, lastName: 'Kumar', email: 'lakhan@ggmaikl.com'}

// ITERATING THE OBJECT -----------------------------------------------------------------------------------------
// - we use for in loop
// - Object.keys() to iterate the objects

// for in loop - prints the key names
for (let key in person) {
  console.log(key); // name age lastName email
}

// print the values using for in loop
for (let key in person) {
  console.log(person[key]); // Lakhan 44 Kumar lakhan@ggmaikl.com
}

// Object.keys()
// - creates an array with all the key names
console.log(Object.keys(person)); // [ 'name', 'age', 'lastName', 'email' ]

// using for of loop and Object.keys() print the key values of the object
for (let key of Object.keys(person)) {
  console.log(person[key]); // Lakhan 44 Kumar lakhan@ggmaikl.com
}

// COMPUTED PROPERTIES
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// create an obj like { objkey1: 'myvalue1', objkey2: 'myvalue2' } using the above variables
const obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj); // { objkey1: 'myvalue1', objkey2: 'myvalue2' }

// SPREAD OPERATOR ----------------------------------------------------------------------------------------------
// - we used spread opeartor for cloning the arrays
// - we can spread only the iterables in spread operator like strings, but not numbers

// spread operators in objects
// Note:
// - we cannot repeat key names in object again
// - if we repeat the value of the later will be considered
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key3: "value3",
  key4: "value4",
};

const newObj = { ...obj1, ...obj2 };
console.log(newObj); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }

console.log({ ..."abc" }); // { '0': 'a', '1': 'b', '2': 'c' }

// OBJECT DESTRUCTURING -----------------------------------------------------------------------------------------
// we need to create variables from the object items
const band = {
  bandName: "coldplay",
  famousSong: "paradise",
};

const { bandName, famousSong } = band;
console.log(bandName, famousSong); // coldplay paradise

// Note:
// - variable names and the key names must match.
// - if u want different name use bandName:newName

// OBJECTS INSIDE ARRAYS ----------------------------------------------------------------------------------------
// - useful in real world application
const users = [
  { name: "Lakhan", gender: "male" },
  { name: "Sarvan", gender: "male" },
  { name: "Dinesh", gender: "female" },
];

// Iterate on them
for (let user of users) {
  console.log(user.name); // Lakhan Sarvan Dinesh
}

// NESTED DESTRUCTURING -----------------------------------------------------------------------------------------
// get user1 name, user3 gender
const [{ name }, , { gender }] = users;

console.log("The user1 name is : ", name); // The user1 name is :  Lakhan
console.log("The user3 gender is : ", gender); // The user3 gender is :  female
