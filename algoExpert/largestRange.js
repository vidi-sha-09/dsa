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
//tc - O(n); sc-O(n)

function range_opt(arr) {
  const nums = {}; // hashmap to track unvisited numbers
  for (const num of arr) {
    nums[num] = true;
  }

  let bestRange = [];
  let longestLength = 0;

  for (const num of arr) {
    if (!nums[num]) continue; // if already visited, skip

    nums[num] = false; // mark as visited
    let currentLength = 1;

    let left = num - 1;
    let right = num + 1;

    // expand to the left
    while (nums[left]) {
      nums[left] = false;
      left--;
      currentLength++;
    }

    // expand to the right
    while (nums[right]) {
      nums[right] = false;
      right++;
      currentLength++;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }

  return bestRange;
}

//optimal approach using set DS
//tc - O(n) sc-O(n)

function longestConsecutive(nums) {
  let numSet = new Set(nums);
  let maxLen = 0;
  for (let num of numSet) {
    // Check if this is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }
      maxLen = Math.max(maxLen, currentStreak);
    }
  }
  return maxLen;
}

arr = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
// arr = [1, 11, 3, 0, 15, 5, 5, 5, 5, 7, 12, 6];
console.log(range_opt(arr));
