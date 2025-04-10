// Difficulty: Easy
// Description: Two Number Sum
//     Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
//      If any two numbers in the input array sum up to the target sum, the function should return the indices og those numbers in an array, in any order.
//      If no two numbers sum up to the target sum, the function should return an empty array.
//     Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single integer to itself in order to obtain the target sum.
//     You can assume that there will be at most one pair of numbers summing up to the target sum.

//     Sample Input
//         array = [3, 5, -4, 8, 11, 1, -1, 6]
//         targetSum = 10
//     Sample Output
//         [4,6] // the numbers could be in reverse order

//brute force - tc: O(n^2) , sc: O(1)
const find2sum_brute = function (arr, target) {
  let n = arr.length,
    maxi = -Infinity;
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let j = i + 1; j < n; j++) {
      s = arr[i] + arr[j];
      if (s === target) return [i, j];
    }
  }
  return [];
};

//optimal - tc: O(n) , sc: O(n)
const find2sum_better = function (arr, target) {
  let n = arr.length;
  let mp = {};
  for (let i = 0; i < n; i++) {
    if (mp[target - arr[i]]) return [mp[target - arr[i]], i];
    else mp[arr[i]] = i;
  }
  return [];
};
