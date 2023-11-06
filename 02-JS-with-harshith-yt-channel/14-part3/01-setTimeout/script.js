// PART 3
// SYNC VS ASYNC

// Synchronous
// - line by line code execution
// - disadvantage - blocking of other code
// - JS is synchronous and single-threaded programming language

// setTimeout() function
// - takes a cb function in parameter
// - it is a func, that runs after a specific amt of time

console.log("start");

setTimeout(() => {
  console.log("inside settimeout");
}, 1000);

console.log("end");

// order of the output
// start
// end
// inside settimeout

// id
// - setTimeout() returns a id
// - we can use that id, to stop the setTimeout function
// - clearTimeout(id); // then the func will not work
