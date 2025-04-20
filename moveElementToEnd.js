// given an array of integers and an integer, write a function that moves all the instances of that integer in the array
//  to the end of the array and returns the array.
// Function should perform this in place and does not need to maintain the position of other integers.

// example:
// arr = [2,1,2,2,2,3,4,2]
// toMove = 2;

// o/p:
// [1,3,4,2,2,2,2,2]

//tc - n; sc - 1
const move = function (a, n) {
  let p = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== n) {
      [a[i], a[p]] = [a[p], a[i]];
      p++;
    }
  }
  return a;
};

// 2 method

const move2 = function (a, n) {
  let i = 0,
    j = a.length - 1;
  while (i < j) {
    while (i < j && a[j] == n) {
      j--;
    }
    if (a[i] == n) {
      [a[i], a[j]] = [a[j], a[i]];
    }
    i++;
  }
  return a;
};

arr = [3, 2, 1, 2, 2, 2, 3, 4, 2];
console.log(move2(arr, 2));
// console.log(move([0, 1, 0, 2, 0], 0));
// console.log(move([-1, 0, -1, 2], -1));
// console.log(move([0, -1, 2, -2, 2], 2));
// console.log(move([2, 3, 3, 2, 1, 1, 2], 2));
// console.log(move([2, 1, 2, 3, 4, 2], 2));
// console.log(move([2, 2, 2], 2));
// console.log(move([1, 3, 4], 2));
// console.log(move([], 2));
