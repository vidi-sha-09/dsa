// Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero.
// In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]]
// such that i!=j, j!=k, k!=i, and their sum is equal to zero.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1] satisfy the condition of summing up to zero with i!=j!=k
// Example 2:
// Input: nums=[-1,0,1,0]
// Output: Output: [[-1,0,1],[-1,1,0]]
// Explanation: Out of all possible unique triplets possible, [-1,0,1] and [-1,1,0] satisfy the condition of summing up to zero with i!=j!=k
//a[i]+a[j]+a[k]=0;

//1. brute - tc: O(n^3) SC: O(no.of triplets)
const findtriplets = function (arr) {
  let n = arr.length,
    ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == 0)
          ans.push([arr[i], arr[j], arr[k]].sort((a, b) => a - b));
      }
    }
  }
  let res = new Set(ans.map(JSON.stringify));
  res = Array.from(res).map(JSON.parse);
  return res;
};

// Use a set to track previously iterated elements (hash)
// Add sorted triplets as strings to a Set to avoid duplicates
// Parse them back into arrays for output
//2. better = tc : O(n^2) sc: O(n)
const findtriplets_better = function (arr) {
  let n = arr.length,
    ans = new Set();
  for (let i = 0; i < n; i++) {
    let hash = new Set();
    for (let j = i + 1; j < n; j++) {
      let third = -(arr[i] + arr[j]);
      if (hash.has(third)) {
        ans.add(JSON.stringify([arr[i], arr[j], third].sort((a, b) => a - b)));
      } else {
        hash.add(arr[j]);
      }
    }
  }
  let res = Array.from(ans).map(JSON.parse);
  return res;
};

//3. optimal - tc: O(n^2) sc:O(1)
//use 2 pointer approach
//make sure to exclude duplicates while inserting elements in list.
const findtriplets_opt = function (arr) {
  let ans = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i != 0 && arr[i] === arr[i - 1]) continue;

    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      let s = arr[i] + arr[j] + arr[k];
      if (s < 0) j++;
      else if (s > 0) k--;
      else {
        ans.push([arr[i], arr[j], arr[k]]);
        j++, k--;

        while (j < k && arr[j] == arr[j - 1]) j++;
        while (j < k && arr[k] == arr[k + 1]) k--;
      }
    }
  }
  return ans;
};

let arr = [-1, 0, 1, 2, -1, -4, -1];
// let arr = [-2, 0, 0, 0, 2, 2, 2];
// let arr = [-1, 0, 1, 2, -1, -1, -1, -4];
console.log(findtriplets_opt(arr));
