// CALLBACKS IN SYNCHRONOUS PROGRAMMING -----------------------------------------
/*
// create a fucntion that takes 2 numbers and a cb func(which adds the 2 numbers)
function getAndAdd(number1, number2, addCallback) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    addCallback(number1, number2);
  } else {
    console.log("wrong data type, please check");
  }
}

function add(num1, num2) {
  console.log(num1 + num2);
}

// output
getAndAdd(1, 2, add); // 3
getAndAdd("1", 2, add); // wrong data type, please check
*/

/*
// same thing can be written as
function getAndAdd(number1, number2, onSuccess, OnFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    OnFailure();
  }
}

// cb func to add tw numbers
function add(num1, num2) {
  console.log(num1 + num2);
}

// cb func for showing error if the passed number is not of number data type
function showError() {
  console.log("wrong data type, please check");
}

// invoking the getAndAdd function
getAndAdd(1, 1, add, showError); // 2
getAndAdd(1, "1", add, showError); // wrong data type please check
*/

