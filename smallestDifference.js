// write a function that takes in 2 non empty arrays of integers, find the pair of numbers(from each of the 2 arrays) whose
// absolute difference is closest to zero, and return an array containing these 2 numbers,
// with the number from first array in the first position

// note: the absolute difference is the distance between the 2 integers on the real number line.

// assume only one pair of number with the smallest difference.

// Input:
// arrayOne = [-1,5,10,20,28,3]
// arrayTwo = [26,134,135,15,17]

// Output:
// [28, 26]

// SC - O(log n + log m) TC - O(nlogn + mlogm)
const sd = function (a1, a2) {
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  let p1 = 0,
    p2 = 0;
  let minDiff = Infinity;
  let result = [];

  while (p1 < a1.length && p2 < a2.length) {
    if (a1[p1] === a2[p2]) return [a1[p1], a2[p2]];

    const diff = Math.abs(a1[p1] - a2[p2]);

    if (diff < minDiff) {
      minDiff = diff;
      result = [a1[p1], a2[p2]];
    }

    if (a1[p1] < a2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
};

arrayOne = [-1, 5, 10, 20, 28, 3];
arrayTwo = [26, 134, 135, 15, 17];
console.log(sd(arrayOne, arrayTwo));
