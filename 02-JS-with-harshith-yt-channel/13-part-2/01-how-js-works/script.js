console.log(this);
console.log(window);
console.log(firstName); // undefined
var firstName = "Lakahn";

// What happens when u run the above code?
// - compilation 
// - code execution 

// - COMPILATION PHASE 
// Official doc of ECMA does not mention that we need to compile our code, 
// - but it says that we need to do early error checking 
// - and detrmining appropriate scope for the variables 
// - for these processes to be followed we need to parse and compile, that is wht we compile the js code.

// EXECUTION PHASE 
// - In JS, code is executed inside -> execution context.
// - First Global execution context is created 