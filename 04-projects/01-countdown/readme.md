- Steps
  - calc the time for new year in milliseconds
  - calc the rem time in milliseconds
    - remTime = newYearsTime - currentTime
  - calc the individual times, like for oneDay, onHr....
  - calc remMonth,remDays.... from remTime variable
  - set the textContent of the each count-els

- Problems i faced 
  - when the page refreshed, the timer content took some time to load. 
  - so i removed the seInterval from the updateTime function and called it outside the function.
  