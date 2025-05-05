// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]]
// such that: 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// TC - O(n^4) , SC - O(1)
var fourSum_brute = function (a, t) {
  let ans = [],
    n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          if (a[i] + a[j] + a[k] + a[l] === t) {
            ans.push([a[i], a[j], a[k], a[l]]);
          }
        }
      }
    }
  }
  let s = new Set(ans.map(JSON.stringify).sort((a, b) => a - b));
  s = Array.from(s).map(JSON.parse);
  return s;
};

// TC - O(n^3) , SC - O(1)
var fourSum_better = function (nums, target) {
  let s = new Set();
  let n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let hashset = new Set();
      for (let k = j + 1; k < n; k++) {
        let fourth = target - (nums[i] + nums[j] + nums[k]);
        if (hashset.has(fourth)) {
          let quadruplet = [nums[i], nums[j], nums[k], fourth];
          quadruplet.sort((a, b) => a - b);
          s.add(JSON.stringify(quadruplet));
        }
        hashset.add(nums[k]);
      }
    }
  }

  return Array.from(s).map((item) => JSON.parse(item));
};

// TC - O(n^3) , SC - O(1)
var fourSum_best = function (nums, target) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (i >= 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        let sum = nums[right] + nums[left] + nums[i] + nums[j];

        if (sum < target) left++;
        else if (sum > target) right--;
        else {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          right--, left++;

          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        }
      }
    }
  }
  return ans;
};

const inp = [1, 0, -1, 0, -2, 2];
console.log(fourSum_best(inp, 0));
// expected op = [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
