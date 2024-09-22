/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(Infinity).map(() => new Array(n).fill(Infinity));
  for (let j = 0; j < n; j++) {
    dp[0][j] = matrix[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const top = dp[i - 1][j]; // 上面
      const topLeft = j > 0 ? dp[i - 1][j - 1] : Infinity; // 左上
      const topRight = j < n - 1 ? dp[i - 1][j + 1] : Infinity; // 右上
      dp[i][j] = matrix[i][j] + Math.min(top, topLeft, topRight);
    }
  }
  return Math.min(...dp[m - 1]);
};

const matrix = [[-19, 57], [-40, -5]]
const n = 13
console.log(minFallingPathSum(matrix))