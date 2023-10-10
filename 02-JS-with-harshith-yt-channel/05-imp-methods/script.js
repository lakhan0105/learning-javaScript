// IMPORTANT ARRAY METHODS --------------------------------------------------------------------------------------
const numbers = [1, 2, 3, 4];

// forEach method
// create a func that takes the array value, its index as an arg and returns the mul and the index
function multiply(number, index) {
  console.log(`${number}*2 = ${number * 2}`);
}

// multiply(numbers[0], 0); // 1*2 = 2
// multiply(numbers[1], 1); // 2*2 = 4
// but we need to do this with all the els of the array

// same thing using traditional for loop
for (let i = 0; i < numbers.length; i++) {
  multiply(numbers[i], i);
}

// this same thing can be done using forEach method
// multiply the array nums by 2
numbers.forEach((number) => {
  console.log(`${number}*2 = ${number * 2}`);
});

// MAP METHOD ---------------------------------------------------------------------------------------------------
// - iterates over the array items
// - returns an array
const users = [
  { firstName: "Lakhan", age: 55 },
  { firstName: "Charith", age: 21 },
  { firstName: "Dheeraj", age: 78 },
];

// using map create a array consisting of all the firstNames
const mapped = users.map((user) => {
  return user.firstName;
});
console.log(mapped); // [ 'Lakhan', 'Charith', 'Dheeraj' ]

// FILTER METHOD ------------------------------------------------------------------------------------------------
// - iterates over the array based on some condition
// - returns a new array
// - returns based on some condition,if no cond is satisfied returns undefined
const filtered = users.filter((user) => {
  return user.firstName === "Lakhan";
});
console.log(filtered); // [{ firstName: 'Lakhan', age: 55 }]

// REDUCE METHOD ------------------------------------------------------------------------------------------------
// - reduces to a value
// - takes a cb fucntion, which  takes 2 args -> acc, curr
// - must return the acc
// - must pass the initial value

const userCart = [
  { productName: "monitor", price: 12000 },
  { productName: "mouse", price: 1200 },
  { productName: "keyboard", price: 2000 },
];

// do the total price using reduce
const totalPrice = userCart.reduce((acc, curr) => {
  //   acc += curr.price; // can be written as below
  return acc + curr.price;
}, 0);

console.log(`Total price is: ${totalPrice}`); // Total price is: 15200

// SORT METHOD --------------------------------------------------------------------------------------------------
// - sorts the arrays accoring to ASCI code
// - mutates the original array
const number2 = [900, 20, 5000, 10, 600];

// sort number2 in ascending order -> [10,20,600,900,5000] (expected)
// but, js sorts considering the numbers array items as string
// number2.sort();
// console.log(number2); // [ 10, 20, 5000, 600, 900 ]

// Advantages of sort (by their ASCI)
// - useful for strings but not useful for numbers
// - Note: capital letters are sorted first

// SORTING THE NUMBERS IN ASCENDING ORDER -----------------------------------------------------------------------
// - For that we need to add an cb function with two args
number2.sort((a, b) => {
  return a - b;
});
console.log(number2); // [ 10, 20, 600, 900, 5000 ]

// How is this working?
// - a = 10, b = 20
// - if a-b => positive, then b will be placed first -> b,a
// - if a-b => negative, then a will be placed first -> a,b
// - same thing happens with all the values of the number2 array

// FIND METHOD --------------------------------------------------------------------------------------------------
// - Iterates over the array
// - returns an object (unlike other methods which mostly return array)
// - returns only the first occurence of the array item
// - useful for finding unique values
// - undefined if not found
const userCart2 = [
  { productName: "monitor", price: 1000 },
  { productName: "mouse", price: 1000 },
  { productName: "keyboard", price: 1000 },
];

const findMethod = userCart2.find((product) => {
  return product.price === 1000;
});
console.log(findMethod); // { productName: 'monitor', price: 1000 }

// EVERY METHOD -------------------------------------------------------------------------------------------------
// - iterates over the array items, checks for some condition,
// - if all the elements satisfies the condition -> true else it returns false
// - returns true/false
const number3 = [1, 2, 3, 4, 5, 6];
const everyMethod = number3.every((number) => {
  return number % 2 === 0;
});
console.log(everyMethod); // false cuz all the numbers in number3 are not even numbers

// SOME METHOD --------------------------------------------------------------------------------------------------
// - iterates over the array items, checks for some condition
// - if any one element, satisfies the condition-> true, else false
// - returns true/false
// - usecase -> check if any of the item price is above 10k
const someMethod = number3.some((number) => {
  return number % 2 === 0;
});
console.log(someMethod); // true cuz atleast one of the el in number3 array is even

// FILL METHOD --------------------------------------------------------------------------------------------------
// - value, start, end
// - lets say u want to create an array and fill all the els with -1s
const allOnes = new Array(10).fill(1);
console.log(allOnes); // [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

// SPLICE METHOD ------------------------------------------------------------------------------------------------
// - useful when u need to insert/del anything from the array
// - syntax, start, delete, insert
const myNewArray = ["item1", "item2", "item3"];

// delete item2 from the above array
// - also returns deleted item in a array which we can access by storing it in a variable
myNewArray.splice(1, 1);
console.log(myNewArray); // [ 'item1', 'item3' ]

// insert
myNewArray.splice(1, 0, "new item");
console.log(myNewArray); // [ 'item1', 'new item', 'item3' ]
