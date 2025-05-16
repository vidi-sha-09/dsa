// write a function that takes an nxm 2d Array. that id square when n=m
// it returns a 1d array of all the 2d arrays elements in spiral order.
// sprial order starts at the top-left corner of the 2d array, goes to the right,
// and proceeds in a spiral pateern all the way until every element has been visited.

// arr = [
//     [1,2,3,4,5,6]
//     [20,21,22,23,24,7]
//     [19,32,33,34,25,8]
//     [18,31,36,35,26,9]
//     [17,30,29,28,27,10]
//     [16,15,14,13,12,11]
// ]

// op = [1,2,3,4,5,6,7,8,9,10,...36];

const matrix = function (mat) {
  let n = mat.length; // row
  let m = mat[0].length; //cols
  let left = 0,
    right = m - 1,
    top = 0,
    bottom = n - 1;
  let ans = [];

  while (top <= bottom && left <= right) {
    //left to right
    for (let i = left; i <= right; i++) {
      ans.push(mat[top][i]);
    }
    top++;
    //top to bottom
    for (let i = top; i <= bottom; i++) {
      ans.push(mat[i][right]);
    }
    right--;
    if (top <= bottom) {
      console.log("here");
      //right to left
      for (let i = right; i >= left; i--) {
        ans.push(mat[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      //bottom to top
      for (let i = bottom; i >= top; i--) {
        ans.push(mat[i][left]);
      }
      left++;
    }
  }
  return ans;
};

const arr = [
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11],
];
console.log(matrix(arr));
