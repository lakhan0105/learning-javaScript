// ES6 CONCEPTS

// VAR LET CONST ------------------------------------------------------------------------------------
// - var - can be redefined
// - which is not a good thing, as it comes with accidental variable redeclaration etc..
// - let - we can reassign, but not redecalre
// - const - we cannot reassign or redeclare

// FUNCTION SCOPE AND BLOCK SCOPE -------------------------------------------------------------------
// - var - function scoped
// - let, const - block scoped

// var cannot be accessed outside the function block
var a = "item";
console.log(a);

function myFunc() {
  var b = "item2";
  console.log(a, b);
}
myFunc(); // item item2
// console.log(a, b); // ERROR: b is not defined

// Block scope
var total = 1000;
var test = true;

if (test) {
  //   var total = 500;
  let total = 500;
  console.log("hello");
}
console.log(total);

// In case of var
// total -> 500, cuz we changed its val in code block

// In case of let and const
// total -> remains 1000, but in {}, it will become 500

// TEMPLATE STRINGS -------------------------------------------------------------------------
// - simple version of string concatenation
// - has interpolation ${}
// - we can also add statements inside them

// most useful feature of template literals - where we place the html dynamically
const person = {
  name: "Dheeraj",
  job: "developer",
  hobbies: ["dancing", "reading"],
};

const resultEl = document.querySelector(".result");

resultEl.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>

<ul>
${person.hobbies
  .map((items) => {
    return `<li>${items}</li>`;
  })
  .join("")}
</ul>
`;

// TAGGED TEMPLATE LITERALS ------------------------------------------------------------------------
// This enables you to manipulate the string content and expressions before they are evaluated.
// Overall, they offer a powerful way to manipulate and customize string templates in JavaScript.
const firstName = "Sarvan";
const lastName = "Singh";
const statement = highLight`firstname is ${firstName} and lastname is ${lastName}`;

// now i need to insert <strong> for every variables
function highLight(textStr, ...vars) {
  const mapped = textStr
    .map((item, index) => {
      return `${item} <strong>${vars[index] || ""}</strong>`;
    })
    .join("");
  return mapped;
}

const userNameEl = document.querySelector(".user-name");
userNameEl.innerHTML = statement;

// ARROW FUNCTIONS -----------------------------------------------------------------------------
// - no name, assigned to variables, no function keyword
// - treats 'this' differently

// reg func - 'this' -> left of the dot (parent)
// arrow func - 'this' -> surrounding scope
const bob = {
  firstName: "bob",
  about: function () {
    console.log(this);
    console.log(`Hello ${this.firstName}`);
  },
};

const lee = {
  firstName: "lee",
  about: () => {
    console.log(this);
    console.log(`Hello ${this.firstName}`);
  },
};

bob.about(); // this points to bob obj
lee.about(); // this points to window object

// Now use setTimeout with regular function
const lakhan = {
  firstName: "lakhan",
  about: function () {
    setTimeout(function () {
      console.log(this); // undefined
      console.log(`Hello ${this.firstName}`);
    }, 1000);
  },
};

const sachin = {
  firstName: "sachin",
  about: function () {
    setTimeout(() => {
      console.log(this);
      console.log(`Hello ${this.firstName}`);
    }, 1000);
  },
};

lakhan.about(); // window
sachin.about(); // sachin obj

// Selecting elements 'this'
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function () {
  console.log(this); // points to parent -> btnEL
});

btnEl.addEventListener("click", () => {
  console.log(this); // points to surrounding -> window
});

// in case of setTimeout
btnEl.addEventListener("click", function () {
  setTimeout(function () {
    console.log(this); // points to parent -> window
  });
});

btnEl.addEventListener("click", function () {
  setTimeout(() => {
    console.log(this); // points to surrounding -> btnEl
  });
});

// DEFAULT PARAMETERS -------------------------------------------------------------------------
// - They act as an parameter when no arg is passed
function sayHi(name = "user") {
  console.log(`Hello ${name}`);
}
sayHi(); // Hello user

// ARROW FUNCTION GOTCHAS
// - the arrow function cannot be called before decalration, u get error

// ARRAY DESTRUCTURING --------------------------------------------------------------------------------
// - Extracting the array items and assigning it them to variables
// - fastest way to access/extract values from an array
// - Also use spread op in array destructuring to cerate a array with all the remaining array items in it
const values = ["value1", "value2", "value3", "value4"];
const [item1, item2, ...restItems] = values;

console.log(item1); // value1
console.log(item2); // value2
console.log(restItems); // ['value3', 'value4']

// SWAP VARIABLES --------------------------------------------------------------------------------------
let first = "value1";
let second = "value2";
[first, second] = [second, first];
console.log(first, second); // value2 value1

// OBJECTS DESTRUCTURING -------------------------------------------------------------------------------
const obj1 = {
  studentName: "Lakhan",
  age: 55,
  siblings: {
    sister: "hena",
  },
};
const {
  studentName,
  age,
  siblings: { sister },
} = obj1;

console.log(studentName); // Lakhan
console.log(age); // 55
console.log(sister); // hena

// NEW STRING METHODS -----------------------------------------------------------------------------------
// startsWith() and endsWith()
// includes(), repeat()

const id = "1223-EMP-SGV-111";
console.log(id.startsWith("EMP", 5)); // true

// for of LOOPS -----------------------------------------------------------------------------------
// - it iterates through the values of the iterables
// - iterables - strings, arrays but not objects

// remove the white spaces from the longName by using for of loop on it
const longName = "Lakhan kumar banu ayyer";
let shortName = "";
for (let letters of longName) {
  if (letters === " ") {
    continue;
  } else {
    shortName += letters;
  }
}
console.log(shortName); // Lakhankumarbanuayyer

// SPREAD OPERATOR ---------------------------------------------------------------------------------
// Allows an iterable to spread/expand individually inside receiver
// splits into single items and copy them
// used for cloning and joining the arrays
const udemy = "udemy";
const letters = [...udemy];
console.log(letters); // ['u', 'd', 'e', 'm', 'y']

const boys = ["Sarvan", "sachin", "dheeraj"];
const girls = ["sindhu", "hena", "achara"];
const bestFriend = "Sarvan";

const frinds = [...boys, ...girls, bestFriend];
console.log(frinds); // ['Sarvan', 'sachin', 'dheeraj', 'sindhu', 'hena', 'achara', 'Sarvan']

// Spread operators in objects
// - we can create a new obj, with overwritten key values
const person1 = { name: "kishan", job: "game-dev" };
// now u need to create a new obj with person1 keys and values, but in this new obj name must be diff
const newPerson = { ...person1, name: "Sachin" };

console.log(person1 === newPerson); // false
console.log(newPerson); // {name: 'Sachin', job: 'game-dev'}

// SPREAD OPERATOR - DOM ELEMENTS -------------------------------------------------------------------
// - we can convert the nodelist into arrays and use methods like map on them
// - we get nodeList when we use querySelectorAll()

// SPREAD OPERATOR - FUNCTION ARGUEMENTS ------------------------------------------------------------
const numbers = [12, 41, 2];
console.log(Math.max(numbers)); // NaN cuz we cannot send array into Math.max()
console.log(Math.max([numbers])); // NaN cuz we cannot send array into Math.max()
console.log(Math.max(...numbers)); // 41

// REST OPERATOR -------------------------------------------------------------------------------------
// - gathers/collects the items
// - while destructuring
// - while taking args in a function
// - Note: rest must be placed at the end
const obj2 = { name: "Lakhan", age: 44, job: "dev", plce: "India" };
const { name, ...rest } = obj2;
console.log(name); // Lakhan
console.log(rest); // {age: 44, job: 'dev', plce: 'India'}

// spread - arguement
// rest - parameters
