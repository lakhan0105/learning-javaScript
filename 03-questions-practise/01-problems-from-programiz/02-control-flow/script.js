// COMMENT BEFORE RUNNING THE CODES

// CONTROL FLOW -------------------------------------------------------
// PROGRAM TO SOLVE A QUADRAITIC EQUATION
// - ax2 + bx + c = 0, where
// - a,b,c = real numbers and a ≠ 0
// - To find the roots
// - First find the discriminant value -> b2-4ac
// - If the discriminant>0, roots are real and different.
// - If the discriminant=0, roots are real and equal.
// - If the discriminant<0, roots are complex and different.

// initialise root1, root2
let root1;
let root2;

// Ask user to enter the values of a,b,c
const a = 1;
const b = -3;
const c = 10;

// find the discriminant
const discriminant = b * b - 4 * a * c;

if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`Roots of the quadriatic equation are ${root1} and ${root2}`);
} else if (discriminant === 0) {
  root1 = root2 = -b / (2 * a);
  console.log(`Roots are equal, root1=root2=${root1}`);
} else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imgPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
  console.log(
    `The roots of quadriatic equation are ${realPart}+${imgPart}i and ${realPart}-${imgPart}i`
  );
}

// Output 1
// a=1,b=6,c=5
// The roots of quadratic equation are -1 and -5

// Output 2
// a=1,b=-6,c=9
// Roots are equal, root1=root2=3

// Output 3
// a=1,b=-3,c=10
// The roots of quadriatic equation are 1.50+2.78i and 1.50-2.78i

// PROGRAM TO CHECK IF A NUM IS +ve/-ve/0 --------------------------------
const num = 0; // enter the number
if (num > 0) {
  console.log(`The entered number ${num} is positive`);
} else if (num === 0) {
  console.log(`The entered number ${num} = 0`);
} else {
  console.log(`The entered number ${num} is -ve`);
}

// FIND IF THE NUMBER IF ODD/EVEN -----------------------------------------
const number = 1;
if (number % 2 === 0) {
  console.log(`${number} is even number`);
} else if (number % 2 !== 0) {
  console.log(`${number} is odd`);
}

// FIND THE GREATEST AMONG THREE NUMBERS -----------------------------------
// Ask user to enter the values of 3 numbers
const num1 = 1;
const num2 = 2;
const num3 = 3;

if (num1 >= num2 && num1 >= num3) {
  console.log(`${num1} is the greatest`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`${num2} is the greatest`);
} else if (num3 >= num1 && num3 >= num2) {
  console.log(`${num3} is the greatest`);
}

// CHECK IF A GIVEN NUMBER IS A PRIME OR NOT ----------------------------------
// - any no divisible by 1 and itself
// - 1 is neither composite nor prime

function checkPrime(num) {
  // check if (num<2) cuz  numbers <2 are not prime
  if (num < 2) {
    return `${num} is not a prime number`;
  }

  for (let i = 2; i < num; i++) {
    // check if the num is divisible by any other num other than 1 and itself
    if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}
console.log(checkPrime(2)); // prime number

// PRINT ALL PRIME NOS IN AN INTERVAL -------------------------------------------
function primeNumInterval(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = 1;
        break;
      }
    }

    // if num>1 and not divisible by other numbers
    if (i > 1 && flag === 0) {
      console.log(i);
    }
  }
}
primeNumInterval(1, 10); // 3 5 7

// FIND FACTORIAL OF A NUMBER --------------------------------------------------------
// - factorial n! - product of all the +ve integers from 1 to n,
// - where n is not equal to -ve number (factorial of -ve num does not exist)
// - factorial of 0 = 1

function findFactorial(number) {
  let fact = 1;

  // check if num<0
  if (num < 0) {
    console.log("factorial of -ve number does not exist");
  }

  // loop and find the fact
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(fact);
}
findFactorial(5); // 120

// DISPLAY THE MULTIPLICATION TABLE -------------------------------------
function mulTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number}x${i}=${number * i}`);
  }
}
mulTable(5);

// FIBONACCI SEQUENCE ---------------------------------------------------
// - It is a series of nums in which each num (after first 2) is the sum of the two preceding ones.
// - It typically starts with 0 and 1.
// 0,1,1,2,3
// 0,1 = 1
// 1,1 = 2
// 1,2 = 3
// 2,3 = 5
function printFibo(number) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  let fiboArray = [n1, n2];

  for (let i = 0; i < number - 2; i++) {
    // number-2 cuz we do not need extra 2 fib numbers printed
    nextTerm = n1 + n2;
    fiboArray.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(fiboArray);
}

printFibo(4); // [ 0, 1, 1, 2 ]

// CHECK IF A GIVEN NUMBER IS A AMSTRONG NUMBER(of any length)
// 153 = 1*1*1 + 5*5*5 + 3*3*3
function amstrong(number) {
  let temp = number;
  let numLength = String(number).length;
  let total = 0;

  while (temp > 0) {
    // we need to take the last digits one by one
    let digit = temp % 10;
    total += digit ** numLength;
    temp = parseInt(temp / 10); // to remove the last digit from temp
  }

  if (total === number) {
    console.log(`${number} is a amstrong number`);
  }
}
amstrong(92727); // 92727 is a amstrong number

