// SYNCRONOUS
// - JS is single-threaded, syncronours language
// - It means, regardless of how many lines of code, JS will execute the code line by line.
// - Even if it takes longer to run a line of code, JS will go next line only after the 1st

// console.log("Before boiling");
// boilWater();
// console.log("boiling complete");

// function boilWater() {
//   for (let i = 0; i <= 100; i++) {
//     console.log("still boiling....");
//   }
// }

// RECIPE EXAMPLE
// Make soup
// - chop onions
// - chop carrots
// - boil water 10mins
// - add carrots, boil for 10mins
// - add onions, boil for 5mins

// FIRST APPROACH
console.log("chop onions");
console.log("chop carrots");
boilWater(10);
boilWater(5);
boilWater(5);

function boilWater(time) {
  for (let i = 1; i <= time; i++) {
    console.log(`boiling for ${time}mins`);
  }
  console.log("done boiling");
}

// we need to do the things asyncronously
// - as the water is boiling, we want to chop the veges asyncrnously
// - boil for 10mins
// - chop carrots
// - add carrots, boil 5mins
// - chop onions
// - add onions, boil for 5mins
