// BASIC MATH CONCEPTS
// Count digits
function countDigits(num) {
  let count = 0;

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  console.log(count);
}
countDigits(1222); // 4
countDigits(4); // 1
countDigits(45); // 2

// Reverse a Number
// 7782 -> 2877
function revNum(num) {
  let reversedNum = 0;
  let lastDigit;

  while (num > 0) {
    lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  console.log(reversedNum);
}
revNum(7782); // 2877
// revNum(012340); // not getting the o/p when i add 0

// Check palindrome for a number
// 121 === 121
function palindrome(num) {
  let dup = num;
  let reversedNum = 0;
  let lastDigit;

  while (num > 0) {
    lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  if (reversedNum === dup) {
    console.log(`${reversedNum} is a palindrome`);
  } else {
    console.log(`${reversedNum} is not a palindrome`);
  }
}
palindrome(121); // 121 is a palindrome
palindrome(1211); // 1121 is not a palindrome

// Armstrong number
// 371 = 3^3 + 7^3 + 1^3 = 371
function armStrong(num) {
  let dup = num;
  let lastDigit;
  let sumOfCube = 0;

  while (num > 0) {
    lastDigit = num % 10;
    sumOfCube += lastDigit ** 3;
    num = Math.floor(num / 10);
  }

  if (sumOfCube === dup) {
    console.log(`Armstrong num`);
  } else {
    console.log(`Not an Armstrong number`);
  }
}

armStrong(371); // Armstrong number
armStrong(71); // Not an Armstrong number

// Print all divisors
function divisors(num) {
  let divisors = "";
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisors += ` ${i}`;
    }
  }
  console.log(divisors);
}
divisors(10);

// Check for prime
// Prime no: a num that has a factor 1 and itself
function prime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  // check count value
  if (count === 2) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not a prime number`);
  }
}
prime(7); // prime number
prime(77); // not a prime number
prime(1); // not a prime number

function prime2(num) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;

      if (num / i !== i) {
        count++;
      }
    }
  }

  if (count === 2) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not a prime number`);
  }
}
prime2(7); // prime number

// Find the gcd of 2 nums
function gcd(a, b) {
  if (a > b) {
    a = a % b;
  } else if (b > a) {
    b = b % a;
  }

  if (a === 0) {
    console.log(b);
  } else {
    console.log(a);
  }
}
gcd(4, 8);

// BASIC RECURSION
// Print name N times using recursion
function printName(name, i = 1, n) {
  if (i > n) {
    return;
  } else {
    console.log(name);
  }

  printName(name, (i = i + 1), n);
}

printName("Lakhan", 1, 5);

// Print 1-N using recursion
function oneToN(i, n) {
  if (i > n) {
    return;
  } else {
    console.log(i);
  }

  oneToN((i = i + 1), n);
}
oneToN(1, 5);

// Print N-1 using recursion
function nToOne(n) {
  if (n < 1) {
    return;
  } else {
    console.log(n);
  }

  nToOne(n - 1);
}
nToOne(5);

// Print 1-N using backtrack
function oneToNBacktrack(i, n) {
  if (i < 1) {
    return;
  }

  oneToNBacktrack(i - 1, n);
  console.log(i);
}

oneToNBacktrack(5, 5);

// Print N-1 using backtrack
function NToOneBacktrack(i, n) {
  if (i > n) {
    return;
  }

  NToOneBacktrack(i + 1, n);
  console.log(i);
}
NToOneBacktrack(1, 5);

// PARAMETERISED AND FUNCTIONAL RECURSION
// Sum of 1st N numbers
// function sumOfN(i, n, sum) {
//   if (i > n) {
//     console.log(sum);
//     return;
//   }

//   sumOfN(i + 1, n, sum + i);
// }
// sumOfN(1, 10, 0);

// Another param approach
// function sumOfN(n, sum) {
//   if (n < 1) {
//     console.log(sum);
//     return;
//   }

//   sumOfN(n - 1, sum + n);
// }
// sumOfN(10, 0);

// Functional approach
function sumOfN(n) {
  if (n < 1) {
    return 0;
  }
  return n + sumOfN(n - 1);
}
console.log(sumOfN(10, 0)); // 55

// Factorial of n Numbers using param approach
// function factOfN(n, fact) {
//   if (n < 1) {
//     console.log(fact);
//     return;
//   }

//   factOfN(n - 1, fact * n);
// }
// factOfN(5, 1); // 120

// Factorial of n Numbers using Functional approach
function factOfN(n) {
  if (n < 1) {
    return 1;
  }

  return n * factOfN(n - 1);
}
console.log(factOfN(5)); // 120

// MORE PROBLEMS ON FUNCIONAL RECURSION
// reversing an array Normal approach
function reverseArr(arr, l = 0, r) {
  if (l >= r) {
    console.log(arr);
    return;
  }

  // sorting
  let temp;
  temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;

  reverseArr(arr, l + 1, r - 1);
}
reverseArr([1, 2, 3, 4], 0, 3);

// reverse using one pointer approach (must also follow functional approach)
// we need to swap 0 with (length-index-1) till the middle
function reverseOneP(arr, left, length) {
  if (left >= length / 2) {
    return arr;
  }

  // swap
  let temp;
  temp = arr[left];
  arr[left] = arr[length - left - 1];
  arr[length - left - 1] = temp;

  return reverseOneP(arr, left + 1, length);
}
console.log(reverseOneP([1, 2, 3, 4], 0, 4));

// Check if a given string is a palindrome or not
// gadag === gadag
function strPalindrome(str, left) {
  if (left >= str.length / 2) {
    return true;
  }

  if (str[left] != str[str.length - left - 1]) {
    return false;
  } else {
    return strPalindrome(str, left + 1);
  }
}

let str = "madxm";
console.log(strPalindrome(str, 0)); // false

// MULTIPLE RECURSION CALLS
// print fibo seq
function fibo(n) {
  if (n <= 1) {
    return n;
  }
  let last = fibo(n - 1);
  let secLast = fibo(n - 2);
  return last + secLast;
}
console.log(fibo(4)); // 3

// Example
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^0-9a-z]/gi, "");

  let right = s.length - 1;
  let revS = "";

  while (right >= 0) {
    revS += s[right];
    right--;
  }

  revS = revS.trim();

  console.log(s);
  console.log(revS);

  if (revS === s) {
    return true;
  } else {
    return false;
  }
};

let str2 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(str2));
 
 