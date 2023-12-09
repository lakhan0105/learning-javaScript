/*
// PROBLEMS ON ARRAYS

// CHECKING SUM ZERO
// - Which pair will return 0 when added?
// - Note: consider the input array as sorted
// Input ->  [-5,-4,-3,-2,0,2,4,6,8]
// Output -> [-4,4]
function checkZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      const result = `[${arr[left]},${arr[right]}]`;
      return result;
    } else {
      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
}
const ansAgain = checkZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(ansAgain);

// SORTING THE ARRAY ITEMS
const unsorted = [50, 20, 40, 12, -2, 5, 600];
function sortArrays(arr) {
  let temp;

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
  return arr;
}
sortArrays(unsorted);

// TWO SUM
// Return the indecies of the pairs = target
// INPUT: [2,7,11,15],9 where 9 is target
// OUTPUT: [0,1]
function twoSum(arr, target) {
  let sum;
  let tempArray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum = arr[i] + arr[j];
      if (sum === target) {
        tempArray.push(i);
        tempArray.push(j);
      }
    }
  }
  return tempArray;
}
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]

// MAXIMUM SUBARRAY
// [5,4,-1,7,8]
const maxSubArray = (nums) => {
  let maxSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currSum = 0;
    for (let j = i; j < nums.length; j++) {
      currSum = currSum + nums[j];

      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }
  return maxSum;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// CONTAINER WITH MOST WATER
var maxArea = function (height) {
  // height =[]
  // height.length = n
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // min value of height is considered as length
    // left-right is considered as width
    const area = Math.min(height[left], height[right]) * (right - left);

    if (area > maxArea) {
      maxArea = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// 3SUM
function threeSum(arr) {
  const resArr = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      for (let k = j + 1; k < arr.length; k++) {
        if (k > j + 1 && arr[k] === arr[k - 1]) continue;
        const sum = arr[i] + arr[j] + arr[k];
        if (sum === 0) {
          resArr.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  const newSet = new Set(resArr);
  return resArr;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
*/

// rough
var threeSum = function (nums) {
  // sorting
  nums.sort((a, b) => a - b);

  const tempArr = [];
  // for loop
  for (let i = 0; i < nums.length; i++) {
    // remove the duplicates
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const target = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (right > left) {
      const sum = nums[left] + nums[right];

      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        tempArr.push([nums[left], nums[right], nums[i]]);
        left++;
        right--;

        if (nums[left] === nums[left - 1]) {
          left++;
        }

        if (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }

  return tempArr;
};

console.log(threeSum([-2, 0, 0, 2, 2]));
