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

// O(1) --------------------------------------------------------------------------------------------------------
// Example
// - function which takes boxes array, and compresses only the first box
// - here there is only one operation being performed
// - no matter how many boxes we have, we are compressing only 1s box
// - O(1) -> Constant time
function compressBoxes(boxes) {
  console.log(boxes[0]);
}
compressBoxes(["box1", "box2", "box3"]); // O(1)

// EXERCISE: BIG O CALCULATION ---------------------------------------------------------------------------------
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

funChallenge(5);
// Big O is 3 +n+n+n+n
// 3+4n
// BIG O(3+4n) which gets simlified to O(n) (will learn later)

// EXERCISE 2 --------------------------------------------------------------------------------------------------
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)

  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

anotherFunChallenge(5);
// BIG 0(4+7n)

// SIMPLIFYING BIG O -------------------------------------------------------------------------------------------
// - in interviews we do no need to cal the Big 0 for every step
// - there is a simple way
// Rule1 - Worst case
// Rule2 - Remove constants
// Rule3 - Different terms for inputs
// Rule4 - drop non dominants

// BIG O RULE 1 - WORST CASE -----------------------------------------------------------------------------------
// - lets say there are 10 names and nemo is the 4th name, but we are running the loop even after finding nemo
// - to make it stop after finding nemo, we use break keyword.
// - worst case - when nemo is at the end of the array and we need to run through all the items of array O(n)
// - best case - when nemo is at the beginning of the array O(1)
// - Big O does not care about the best case, we only look for worst case i.e O(n)

// BIG O RULE 2 - REMOVE CONSTANTS -----------------------------------------------------------------------------
// - if BIG O(2n+100)-> make it to O(n).
// - for O(2n) -> O(n) cuz we are removing the constants.
// - cuz it does not matter , even after removing the constants, the graph is linear only

// BIG O RULE 3 - DIFFERENT TERMS FOR INPUTS -------------------------------------------------------------------
// - the Big O for the below notation is O(a+b)
// - because there are 2 inputs, for input1 the n is different and for input2 its diff
// the below code has error
function compressBoxes(boxes, boxes2) {
  boxes.forEach((box) => {
    console.log(box);
  });

  boxes2.forEach((box) => {
    console.log(box);
  });
}
compressBoxes([1, 2], [1, 2]);
// O(a+b);
*/

// WHAT IF THE LOOPS ARE NESTED LOOPS --------------------------------------------------------------------------
const boxes = [1, 2, 3, 4, 5];

// log all pairs of the boxes given in the array -> like 1,1 1,2 1,3.. 2,1 2,2 ......
for (let i = 0; i < boxes.length; i++) {
  let num1 = boxes[i];
  for (let j = 0; j < boxes.length; j++) {
    let num2 = boxes[j];
    console.log([num1, num2]);
  }
}
// Big O is O(n * n) -> O(n^2)
// O(n^2) is

// if the 2 boxes loops are nested -> O(a*b) cuz the inputs are different

// BIG O RULE 3 - DROP NON DOMINANTS ---------------------------------------------------------------------------
