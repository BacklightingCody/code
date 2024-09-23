/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length
  const dp = new Array(n).fill().map(() => new Array(n).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    dp[i][i] = 1
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  console.log(dp)
  return dp[0][n - 1]
};

const s = "bbbab";
console.log(longestPalindromeSubseq(s));  