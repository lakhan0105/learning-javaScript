// SELECTION SORT
// Step1 : get the min, and swap
// The outer loopn loops till 2nd last el of the array
// The inner loop checks for each el of the arr with the outer loop i
function selSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let min = i;
    for (j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;

        // swap
        let temp = arr[min];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

  console.log(`Sorted Array: ${arr}`);
}

// Output
const array = [13, 46, 24, 52, 20, 9];
selSort(array);

