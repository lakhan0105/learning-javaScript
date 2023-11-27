/*
// JS PGM TO DISPLAY CURRENT DAY AND TIME IN THE FOLLOWING FORMAT
// Today is : Tuesday, Current time is : 10 PM : 30 : 38
const date = new Date();
const monthsArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// today's day
const day = date.getDay();

// hours, mins, seconds
let hour = date.getHours();
const minutes = date.getMinutes();
const sec = date.getSeconds();

// prepand
const prepand = hour > 12 ? "PM" : "AM";

// convert to 12hrs format
if (hour > 12) {
  hour = hour - 12;
}

// Print the o/p in the console
console.log(`Today is : ${daysArray[day]}`);
console.log(`Current Time is : ${hour} ${prepand} : ${minutes} : ${sec}`);

// ======================================================================================
// Write a JavaScript program to print the current window contents.
// window.print();

// ======================================================================================
// Write a JavaScript program to get the current date.
// dd-mm-yyyy, dd/mm/yyyy
const todaysDate = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
console.log(`${todaysDate}-${month}-${year}`);

// ======================================================================================
// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
function areaOfTriangle() {
  const side1 = 5;
  const side2 = 6;
  const side3 = 7;

  const s = (side1 + side2 + side3) / 2; // semi-perimeter
  const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3))); // area
  console.log(area);
}
areaOfTriangle();

// ======================================================================================
// JS program to rotate the string 'w3resource' in the right direction.
// This is done by periodically removing one letter from the string end and attaching it to the front.
function rotateStr(str) {
  setInterval(() => {
    // convert to array
    const strArray = str.split("");

    // remove the last chars
    const removedChar = strArray.pop();
    // add to the beginning
    strArray.unshift(removedChar);

    // convert to string using join("")
    const rotatedStr = strArray.join("");

    // set the original str to the rotatedStr
    str = rotatedStr;
    console.log(str);
  }, 1000);
}

rotateStr("w3resource");

// ======================================================================================
// JS program to determine whether a given year is a leap year in the Gregorian calendar.
// - year%4===0 and year%100 !==0 -> leap year
// - year%400===0 -> leap year
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}
leapYear(2024);

// ======================================================================================
// JS program to find out if 1st January will be a Sunday between 2014 and 2050.
const monthsArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function checkSunday() {
  for (let year = 2014; year <= 2024; year++) {
    let d = new Date(year, 0, 1); // yyyy-mm-dd

    if (d.getMonth() === 0 && d.getDate() === 1 && d.getDay() === 0) {
      console.log(`Sunday is on ${d.getDate()}/${d.getMonth() + 1}/${year}`); // dd-mm-yyyy
    }
  }
}
checkSunday();

// ======================================================================================
// JS pgm where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number.
// The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".
function guessNumber() {
  // generate random number
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  // take user input
//   const num = Number(prompt("Enter the number"));

  if (num === randomNumber) {
    console.log("Matched!");
  } else {
    console.log("Not Matched");
  }

  console.log(`Your input:${num}, hidden num to be guessed:${randomNumber}`);
}

guessNumber();

// ======================================================================================
// JS pgm to calculate the days left before Christmas.
// DOUBT
function daysBeforeChristmas() {
  const today = new Date();
  const cmas = new Date(today.getFullYear(), 11, 25);

  // if todays date is past cmas for the same year, set the cmas to next year
  if (today.getMonth() === 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((cmas.getTime() - today.getTime()) / oneDay);
  console.log(`There are ${daysLeft}days left for christmas this year`);
}

daysBeforeChristmas();
*/
