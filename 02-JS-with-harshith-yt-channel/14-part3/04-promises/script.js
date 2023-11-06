// PROMISES
// - they are the future values that we do not know atm, but we will come to know later.
// - STATUS - pending, after the completion of code pending-> fullfiled
// - VALUE - undefined,

// PRODUCING/CREATING A PROMISE
// - new Promise()
// - pass a function inside it with 2 params (resolve, reject)

// CONSUMING THE PROMISE
// - .then() is a method that takes a cb function
// - we can recieve anything in the arg of that cb function

// PRODUCING A PROMISE
console.log("script start...");
const bucket = ["rice", "vinegar", "tomato", "salt", "onion", "chips"];
const lunchPromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("rice") &&
    bucket.includes("salt") &&
    bucket.includes("onion")
  ) {
    resolve("fridrice is ready");
  } else {
    reject("couldn't make friedrice");
  }
});

// CONSUMING THE PROMISE
lunchPromise
  .then(
    // when promise is resolved
    (promiseResult) => {
      console.log(promiseResult); //friedrice is ready
    }
  )
  .catch((error) => {
    // when rejected
    console.log(error);
  });

// for loop
for (let i = 1; i <= 100; i++) {
  console.log(Math.random(), i);
}
console.log("script end.....");

// PROVE THAT THE PROMISE IS ASYNC
// - the producing is stored as obj by javascript
// - but the consuming of the promise is done by browser, async
// - Output order
// -- start script...
// -- for loop output
// -- script end.....
// -- friedrice is ready(promise)

