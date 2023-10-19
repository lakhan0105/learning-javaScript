/*
// What is a Good code
// 1. Readable
// 2. Scalable

// Scalable
const nemo = ["nemo"];
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("we found nemo!");
    }
  }
}

findNemo(nemo);

// Notes
// - runtime - how long does it takes to run the given instruction
// - Big O allows us to measure the scalability

// BIG O AND SCALABILITY ---------------------------------------------------------------------------------------

// Example
// - use t0 and t1 before and after the loop to see the time taken before and after the loop in milliseconds
const nemo = ["nemo"];
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("we found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log(`Time take to run the loop is ${t1 - t0} milliseconds`);
}

findNemo(nemo);
// O/P
// we found NEMO!
// Time take to run the loop is 6.707099974155426 milliseconds

// Instead of having a small array, noe have a big array
const everyOne = ["dory", "viva", "olu", "tomu", "nemo", "nigle", "bary"];
findNemo(everyOne);
// we found NEMO!
// Time take to run the loop is 0.4487000107765198 milliseconds

// lets create a much larger array
const largeArray = new Array(100).fill("nemo");
findNemo(largeArray);
// Prints we found NEMO! 100 times
// Time take to run the loop is 63.09400004148483 milliseconds

// Note:
// - As our i/p grew, our runtime became more slower and slower
// - the time taken to run the code will be different for every computer
// - so how do we efficiently measure thr runtime
// - Big O notation is a lang that we use to measure runtime (how long a computer takes to run a instruction)
// - when we talk about scalability and big O, we mean when we grow bigger and bigger with the i/p how much the runtime slow down?

// O(n) --------------------------------------------------------------------------------------------------------
// - we now know that, we do not need to cal the t0 and t1 as it can vary from one comp to another
// - we need to cal the no of steps involved in our instruction
// - look at the below function, and tell the Big O of the function 
const everyOne = ["dory", "viva", "olu", "tomu", "nemo", "nigle", "bary"];
findNemo(everyOne);

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("we found NEMO!");
    }
  }
}

findNemo(everyOne);

// - The BigO of the above function is O(n) or Linear Time 
// - O(n) means the operations depend on the number of inputs 
*/

// O(1) --------------------------------------------------------------------------------------------------------
