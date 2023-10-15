// COMMENT BEFORE RUNNING THE CODES

// CONTROL FLOW ----------------------------------------------------------------------------------------------
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

// PROGRAM TO CHECK IF A NUM IS +ve/-ve/0 -------------------------------------------------------------------
const num = 0; // enter the number
if (num > 0) {
  console.log(`The entered number ${num} is positive`);
} else if (num === 0) {
  console.log(`The entered number ${num} = 0`);
} else {
  console.log(`The entered number ${num} is -ve`);
}

// FIND IF THE NUMBER IF ODD/EVEN ----------------------------------------------------------------------------
const number = 1;
if (number % 2 === 0) {
  console.log(`${number} is even number`);
} else if (number % 2 !== 0) {
  console.log(`${number} is odd`);
}

// FIND THE GREATEST AMONG THREE NUMBERS ---------------------------------------------------------------------
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

// 