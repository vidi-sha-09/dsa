// 🧩 Question: Find the Largest Range

// Problem Statement:

// > Write a function that takes in a non-empty array of integers and returns an array containing the starting and ending numbers
//  of the largest range of consecutive integers contained in the array.
// > A range is a set of numbers that appear consecutively without missing numbers,
//  and order doesn't matter in the input array.
// > If there are duplicates, only count unique numbers.
// > If there are multiple ranges of the same length, you can return any of them.

// ✨ Sample Input 1:

// ```javascript
// array = [1, 11, 3, 0, 15, 5, 5, 5, 5, 7, 12, 6]
// ```

// ✅ Sample Output 1:

// ```javascript
// [5, 7]
// ```

// Explanation:

// * After sorting and removing duplicates: `[0,1,3,5,6,7,11,12,15]`
// * Consecutive sequences:

//   * `[0,1]` → length 2
//   * `[5,6,7]` → length 3
//   * `[11,12]` → length 2
// * Longest range is `[5,7]` with 3 numbers.

// ---

// ✨ Sample Input 2:

// ```javascript
// array = [4, 2, 1, 3]
// ```

// ✅ Sample Output 2:

// ```javascript
// [1,4]
// ```

// Explanation:

// * After sorting: `[1,2,3,4]`
// * Whole array is consecutive: 1 → 2 → 3 → 4.

// ---

// ✨ Sample Input 3:

// ```javascript
// array = [10, 5, 1, 3, 2]
// ```

// ✅ Sample Output 3:

// ```javascript
// [1,3]` or `[1,5]` (depends if you allow gaps or strictly consecutive)
// ```

// * Only `[1,2,3]` are consecutive (1 → 2 → 3).
// * `[5]` and `[10]` are isolated.

// ---

// 🚀 Constraints:

// * Array will have at least 1 number.
// * Numbers may be positive, negative, or 0.
// * Duplicates may be present.
// * You must find the longest consecutive range.
// * Time and space constraints can allow O(n) or O(n log n) solutions.
// ==================================================================================================================

//pseudocode:
// 1. Sort array
// 2. Remove duplicates
// 3. Initialize variables:
//    - currentStart = to track the start of subarray with probable largest range.
//    - bestStart, bestEnd
// 4. For each number:
//    - If consecutive to previous number then extend
//    - Else, reset the currentStart
// 5. Track longest range

//brute force
//tc - O(nlogn); sc - O(1)

const range = function (arr) {
  arr.sort((a, b) => a - b); // sort the array

  let maxlen = 0,
    len = 0;
  let bestStart = arr[0];
  let bestEnd = arr[0];
  let currentStart = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) continue; // skip duplicates

    if (arr[i] + 1 == arr[i + 1]) {
      len++;
    } else {
      // sequence broke
      if (len > maxlen) {
        maxlen = len;
        bestStart = currentStart;
        bestEnd = arr[i];
      }
      len = 0;
      currentStart = arr[i + 1]; // reset the start for the next possible sequence
    }
  }

  if (len > maxlen) {
    bestStart = currentStart;
    bestEnd = arr[arr.length - 1];
  }

  //   console.log(arr, [bestStart, bestEnd]);
  return [bestStart, bestEnd];
};

// optimal approach
//tc - O(); sc-O()

const range_opt = function (arr) {};

arr = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
// arr = [1, 11, 3, 0, 15, 5, 5, 5, 5, 7, 12, 6];
console.log(range(arr));
