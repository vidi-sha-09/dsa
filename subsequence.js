// given two non empty arrays of integers, write a function that determines whether the second array is the subsequence of the first one.

// sample input:
// array = [5,1,22,25,6,-1,8,10]
// sequence = [1,6,-1,10]

// output:
// true

// tc - O(n) , sc - O(1)
const ls2 = function (str, s) {
  let ptr = 0;
  for (let i = 0; i < str.length; i++) {
    if (ptr === s.length) return true;
    if (s[ptr] === str[i]) ptr++;
  }
  return false;
};

// tc - O(n) , sc - O(1)
const ls = function (str, s) {
  let s1 = 0,
    s2 = 0;
  while (s1 < str.length && s2 < s.length) {
    if (str[s1] === s[s2]) s2++;
    s1++;
  }
  return s2 === s.length;
};

console.log(ls2("asbscs", "abc")); //true
console.log(ls2("asbscs", "acf")); //false

// console.log(ls("asbscs", "abc")); //true
// console.log(ls("asbscs", "acf")); //false
