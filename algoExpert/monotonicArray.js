// Monotonic Array
// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic.
// An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
// Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase.
// Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.
// Note that empty arrays and arrays of one element are monotonic.

// Sample Input
// array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

// Sample Output
// true

//TC - o(2n); SC-o(1)
const mono = function (a) {
  let flag = 0;

  //if 0 or 1 length
  if (a.length == 0 || a.length == 1) return true;

  //check if increasing or decreasing and set a flag - o(n)
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i] != a[i + 1]) {
      flag = a[i] > a[i + 1] ? -1 : 1;
      break;
    }
  }

  //check if flag value and comparison not match - o(n)
  for (let i = 1; i < a.length - 1; i++) {
    if (a[i] < a[i + 1] && flag == -1) return false;
    if (a[i] > a[i + 1] && flag == 1) return false;
  }
  return true;
};

const testCases = [
  { input: [], expected: true }, // empty array
  { input: [1], expected: true }, // one element
  { input: [1, 2, 3, 4], expected: true }, // strictly increasing
  { input: [5, 5, 6], expected: true }, // strictly increasing
  { input: [5, 5, 4], expected: true }, // strictly decreasing
  { input: [4, 3, 2, 1], expected: true }, // strictly decreasing
  { input: [1, 2, 2, 3], expected: true }, // non-decreasing with repeats
  { input: [3, 3, 2, 1], expected: true }, // non-increasing with repeats
  { input: [1, 2, 3, 2, 1], expected: false }, // increase then decrease
  { input: [5, 5, 5, 5], expected: true }, // all elements equal
  { input: [1, 3, 2], expected: false }, // increasing then decreasing
  { input: [3, 2, 4], expected: false }, // decreasing then increasing
  { input: [0, 0, -1, -2], expected: true }, // non-increasing with zero
  { input: [-1, -5, -10, -1100, -1100, -1101, -1102, -9001], expected: true }, // example input
];

for (let { input, expected } of testCases) {
  const result = mono(input);
  console.log(
    `Input: [${input}] → ${result} (${result === expected ? "✅" : "❌"})`
  );
}
