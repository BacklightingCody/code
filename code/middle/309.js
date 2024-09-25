/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  if (n === 0) return 0;

  let hold = -prices[0]; // 持有股票时的利润
  let cooldown = 0;      // 冷冻期时的利润
  let cash = 0;          // 不持有股票时的利润

  for (let i = 1; i < n; i++) {
    let prevCash = cash;
    cash = Math.max(cash, cooldown);  // 不持有股票时的最大利润
    cooldown = hold + prices[i];      // 卖出股票进入冷冻期
    hold = Math.max(hold, prevCash - prices[i]); // 买入股票或保持持有
  }

  return Math.max(cash, cooldown); // 最大利润是最后不持有股票时的最大值
};

const prices = [1, 2, 3, 0, 2];
console.log(maxProfit(prices)); // 输出应为 3
