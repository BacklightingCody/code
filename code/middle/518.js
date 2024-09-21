/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const c = coins.length
  const dp = Array(amount + 1).fill(0)
  dp[0] = 1
  for (let i = 0; i < c; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i]) {
        dp[j] = dp[j] + dp[j - coins[i]]
      }
    }
  }
  return dp[amount]
};
const amount = 5
const coins = [1, 2, 5]
console.log(change(amount, coins))