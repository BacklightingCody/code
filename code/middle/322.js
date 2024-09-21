/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0
  const c = coins.length
  const a = amount
  const dp = Array(a + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= a; i++) {
    for (let j = 0; j < c; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[a] === Infinity ? -1 : dp[a]
}