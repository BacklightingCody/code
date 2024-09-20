/**
 * @param {number[][]} triangle
 * @return {number}
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let len = triangle.length;

  let dp = Array(len).fill().map(() => Array(len + 1).fill(Infinity));
  dp[0][1] = triangle[0][0]
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i + 1; j++) {
      dp[i][j + 1] = Math.min(dp[i - 1][j + 1], dp[i - 1][j]) + triangle[i][j];
    }
  }

  return Math.min(...dp[len - 1])
};


const triangle = [[-1], [2, 3], [1, -1, -3]]
console.log(minimumTotal(triangle))