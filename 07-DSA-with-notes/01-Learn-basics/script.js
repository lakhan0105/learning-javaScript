// STEP 1
// BASIC MATHS

// COUNT THE NUMBER OF DIGITS IN A NUMBER
// Note: if the problem depends on division TC-> in terms of log (O(log10(N)) for below)
function countDigits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log(countDigits(1231)); // 4

// REVERSE A NUMBER
// if the num has trailing zeros, do not include them
// 10400 - > 401 not 00401
function reverseNum(num) {
  let res = 0;

  while (num > 0) {
    const lastDigit = num % 10;
    res = res * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return res;
}
console.log(reverseNum(123));
console.log(reverseNum(10400));

// PALINDROME OF A NUMMBER
function palNum(num) {
  const userInput = num;
  let reversedNum = 0;

  while (num > 0) {
    const lastDigit = num % 10;
    // reversedNum += lastDigit;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  console.log(reversedNum);
  if (userInput === reversedNum) {
    return true;
  } else {
    return false;
  }
}
console.log(palNum(123));
console.log(palNum(7));
// console.log(palNum(010)); // true

// ARMSTRONG NUMBER
function armstrongNum(num) {
  const dup = num;
  const numOfDigits = String(num).length;
  let sum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    sum += lastDigit ** numOfDigits;
    num = Math.floor(num / 10);
  }

  if (dup === sum) {
    return `${dup} is an Armstrog number`;
  } else {
    return false;
  }
}

console.log(armstrongNum(153));
console.log(armstrongNum(1634)); // true

// PRINT ALL DIVISORS
function printAllDivisors(num) {
  let divisors = "";

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      divisors += `${i} `;
    }
  }

  return divisors;
}
console.log(printAllDivisors(36)); // 1 2 3 4 6 9 12 18 36

// APPROACH 2
// TC-> O(sqrt(N))
function printAllDivisors2(num) {
  let divs = "";

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divs += ` ${i}`;
      if (num / i !== i) {
        divs += ` ${num / i}`;
      }
    }
  }

  return divs;
}

console.log(printAllDivisors2(36));
