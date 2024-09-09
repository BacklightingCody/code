/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  const dp = []
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
};
const n =5
console.log(fib(n))