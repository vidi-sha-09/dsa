const odd = function (n) {
  if ((n & 1) == 1) return true;
  return false;
};

console.log(odd(133));
console.log(odd(0));
console.log(odd(-10));
console.log(odd(24));
console.log(odd(1));
console.log(odd(132));
