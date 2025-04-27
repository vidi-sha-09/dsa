// write a func that takes in atleast an array of 2 integers and that returns an array of the starting and
// ending indices of the
// smallest subarray in the input array that needs to be sorted inplace in order for the entire input array
//  to be sorted(in ascending).a

// if input array is already sorted, return [-1,-1].at
// ip -
// array = [1,2,4,7,10,7,12,6,7,16,18,19]

// op -
// [3,9]

const subs = function (a) {
  let minptr = 0,
    maxptr = a.length - 1,
    minOOO = Infinity,
    maxOOO = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (oobounds(i, a)) {
      minOOO = Math.min(minOOO, a[i]);
      maxOOO = Math.max(maxOOO, a[i]);
    }
  }

  if (minOOO === Infinity) return [-1, -1];

  while (a[minptr] <= minOOO) minptr++;
  while (a[maxptr] >= maxOOO) maxptr--;

  return [minptr, maxptr];
};

function oobounds(ele, arr) {
  if (ele === 0) return arr[ele] > arr[ele + 1];
  if (ele === arr.length - 1) return arr[ele] < arr[ele - 1];
  return arr[ele] > arr[ele + 1] || arr[ele] < arr[ele - 1];
}

console.log(subs([1, 2, 4, 7, 10, 7, 12, 6, 7, 16, 18, 19]));
