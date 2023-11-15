// ASYNCRONOUS JAVASCRIPT
// - A style of programming in which certain operations can be initiated, and then the program can continue to execute other code without waiting for those operations to finish.
// - When the initiated operation completes, a callback function (or a promise) is executed to handle the result.

boilWater(2000);
console.log("chop onions"); // ---> 2nd
console.log("chop carrots"); // ---> 3rd

function boilWater(time) {
  console.log("started boiling..."); // ---> runs 1st
  setTimeout(() => {
    console.log("done with the soup"); // ---> last
  }, time);
}
