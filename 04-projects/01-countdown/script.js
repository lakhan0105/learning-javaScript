// Selecting the elements
const monthEl = document.querySelector(".months-count");
const dayEl = document.querySelector(".days-count");
const hrEl = document.querySelector(".hours-count");
const minEl = document.querySelector(".minutes-count");
const secEl = document.querySelector(".seconds-count");

// new years date object
const newYear = new Date("2024 1 1");
const newYearTime = newYear.getTime();

// window.addEventListener("load", function () {
//   updateTime();
// });
// window.onload(updateTime());

// Update the time using setInterval
function updateTime() {
  // current date object
  const date = new Date();
  const currentTime = date.getTime();

  // remaining time
  const remTime = newYearTime - currentTime;

  const oneSec = 1000;
  const oneMin = 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneMonth = 28 * 24 * 60 * 60 * 1000;

  const remMonth = remTime / oneMonth;
  const remDay = (remTime % oneMonth) / oneDay;
  const remHr = (remTime % oneDay) / oneHr;
  const remMin = (remTime % oneHr) / oneMin;
  const remSec = (remTime % oneMin) / oneSec;

  // setting the textContent
  monthEl.textContent = Math.floor(remMonth);
  dayEl.textContent = Math.floor(remDay);
  hrEl.textContent = Math.floor(remHr);
  minEl.textContent = Math.floor(remMin);
  secEl.textContent = Math.floor(remSec);
}

// when the page loads, update the count content and do not w8 for seInterval to trigger
updateTime();

// setInterval (triggers after 1sec)
setInterval(updateTime, 1000);
