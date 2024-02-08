// =====================================
// BUBBLE SORT
// =====================================
// - It pushes max to the last, by adjacent swaps
function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swaping
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

// Output
bubbleSort([13, 46, 24, 52, 20, 9]); // [ 9, 13, 20, 24, 46, 52 ]

// worst case BigO O(n^2)
// best case O(N)
