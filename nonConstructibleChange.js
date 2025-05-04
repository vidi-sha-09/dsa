// # 📝 Problem: Non-Constructible Change

// You are given an array of positive integers `coins`, where each integer represents a coin of that value.

// You can use any number of coins (including zero coins) to create sums of money.
// **Your goal is to find the smallest amount of money that you **cannot** create using any combination of the coins.**

// Return this **smallest amount**.

// ## ✏️ Input:

// * An array `coins` of length `n` (`1 ≤ n ≤ 10⁵`).
// * Each `coins[i]` is a positive integer (`1 ≤ coins[i] ≤ 10⁴`).

// ## ✏️ Output:

// * A single integer — the smallest amount of money you **cannot** create.

// ## 📥 Sample Input 1:
// coins = [5, 7, 1, 1, 2, 3, 22]

// ## 📤 Sample Output 1:
// 20

// ### 📖 Explanation:

// You can create all sums up to 19 using some combination of these coins.
// However, you cannot create the sum of 20.

// ## 📥 Sample Input 2:
// coins = [1, 1, 1, 1, 1]

// ## 📤 Sample Output 2:
// 6

// ### 📖 Explanation:
// Using the coins:

// * 1 → make 1
// * 1+1 → make 2
// * 1+1+1 → make 3
// * 1+1+1+1 → make 4
// * 1+1+1+1+1 → make 5
// But you cannot make 6.

// ## 📥 Sample Input 3:
// coins = [2, 3, 4]

// ## 📤 Sample Output 3:
// 1

// ### 📖 Explanation:
// You have no 1-coin, so you cannot even make 1.

// # ✅ Constraints Reminder:

// * You may use each coin **at most once** in any combination.
// * Coins are **positive integers**.

// TC - O(2 ^ n) SC-O(2^n);
function change(coins) {
  let sums = new Set();
  sums.add(0); // Start with 0 (no coins)

  for (let coin of coins) {
    let newSums = new Set();
    for (let sum of sums) {
      newSums.add(sum + coin);
    }
    for (let sum of newSums) {
      sums.add(sum);
    }
  }

  let smallest = 1;
  while (sums.has(smallest)) {
    smallest++;
  }
  return smallest;
}

// TC - O(nlogn) SC-O(1);
function changeOpt(coins) {
  coins.sort((a, b) => a - b);

  let current = 0;
  for (let coin of coins) {
    if (coin > current + 1) {
      return current + 1;
    }
    current += coin;
  }
  return current + 1;
}

// const res = change([1, 2, 5]);
const res = changeOpt([5, 7, 1, 1, 2, 3, 22]);
console.log(res);
