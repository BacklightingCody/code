/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const n = days.length;
  const dp = new Array(n + 1).fill(0); // dp[i] 表示到第 i 天的最小花费
  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + costs[0]; // 默认使用1天票

    // 检查7天票的情况
    let j = i - 1;
    while (j >= 0 && days[i - 1] - days[j] < 7) {
      j--;
    }
    dp[i] = Math.min(dp[i], dp[j + 1] + costs[1]);

    // 检查30天票的情况
    j = i - 1;
    while (j >= 0 && days[i - 1] - days[j] < 30) {
      j--;
    }
    dp[i] = Math.min(dp[i], dp[j + 1] + costs[2]);
  }

  return dp[n];
};

// const days = [1, 4, 6, 7, 8, 20];
// const days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
const days = [1, 2, 3, 4]
const cost = [2, 7, 15];
console.log(mincostTickets(days, cost));