// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// tc - nlogn; sc - n
const sq_brute = function (a) {
  let res = [];
  res = a.map((i) => i * i).sort((a, b) => a - b);

  return res;
};

// tc - n; sc - n;
const sq_opt = function (a) {
  let res = [];
  let p = a.length - 1,
    i = 0,
    ptr = p;

  while (i <= p) {
    if (Math.abs(a[i]) < Math.abs(a[p])) {
      res[ptr] = a[p] * a[p];
      p--;
    } else {
      res[ptr] = a[i] * a[i];
      i++;
    }
    ptr--;
  }
  return res;
};

// const nums = [-12, -5, -3, -2, -1];
const nums = [-4, -1, 0, 3, 10];
// const nums = [-7, -3, 2, 3, 11];
console.log(sq_opt(nums));
