/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  // dp: dp[i][j] 表示使用 i 个 '0' 和 j 个 '1' 时可以组成的字符串的最大数量。
  for (const str of strs) {
    const [zeros, ones] = [...str].reduce((acc, cur) => {
      acc[cur === '0' ? 0 : 1]++;
      return acc;
    }, [0, 0]);

    // 从后往前更新 dp 数组，以防重复计算
    for (let i = m; i >= zeros; i--) {
      for (let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }
  return dp[m][n];
};

// 测试示例
const strs = ["10", "0001", "111001", "1", "0"];
console.log(findMaxForm(strs, 5, 3)); // 输出结果
