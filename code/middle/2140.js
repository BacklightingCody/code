/**
 * @param {number[][]} questions
 * @return {number}
 */
// var mostPoints = function (questions) {
//   const n = questions.length;
//   const dp = new Array(n).fill(0);

//   // 初始化第一个题目的分数
//   dp[0] = questions[0][0];

//   // 遍历每一个题目
//   for (let i = 1; i < n; i++) {
//     // 当前题目自己完成后的分数
//     dp[i] = questions[i][0];

//     // 检查能否加上之前题目的分数
//     for (let j = i - 1; j >= 0; j--) {
//       if (j + questions[j][1] < i) {
//         dp[i] = Math.max(dp[i], dp[j] + questions[i][0]);
//       }
//     }
//   }

//   // 返回dp数组中最大的分数
//   return Math.max(...dp);
// };
// 超时
var mostPoints = function (questions) {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0); // 用来存储从当前题目开始的最大分数

  // 从最后一题向前计算
  for (let i = n - 1; i >= 0; i--) {
    // 不做当前题目的情况
    let skip = dp[i + 1];

    // 做当前题目的情况
    let solve = questions[i][0];
    if (i + questions[i][1] + 1 < n) {
      solve += dp[i + questions[i][1] + 1];
    }

    // 当前题目 dp[i] 是两种方案的最大值
    dp[i] = Math.max(skip, solve);
  }

  // dp[0] 是从第一题开始的最大分数
  return dp[0];
};
const questions = [[3, 2], [4, 3], [4, 4], [2, 5]]
// const questions = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
console.log(mostPoints(questions))