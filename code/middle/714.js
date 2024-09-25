/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const n = prices.length;
  const dp = Array(n).fill(0);
  let min = prices[0];
  for (let i = 1; i < n; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      if (prices[i] - min - fee > 0) {
        dp[i] = prices[i] - fee - min;
        min = prices[i] - fee
      }
    }

  }
  console.log(dp)
  return dp.reduce((a, b) => a + b,0)
}
// gpt
// var maxProfit = function (prices, fee) {
//   let n = prices.length;
//   let hold = -prices[0]; // 持有股票的最大利润（负数表示买入）
//   let cash = 0; // 不持有股票的最大利润

//   for (let i = 1; i < n; i++) {
//     // 更新持有股票的状态，选择保持原状或以当前价格买入
//     hold = Math.max(hold, cash - prices[i]);
//     // 更新不持有股票的状态，选择保持原状或以当前价格卖出
//     cash = Math.max(cash, hold + prices[i] - fee);
//   }

//   return cash; // 最终的最大利润是我们不持有股票时的利润
// };
// const prices = [1, 3, 2, 8, 4, 9], fee = 2;
// const prices = [1, 3, 7, 5, 10, 3], fee = 3
const prices = [1, 4, 6, 2, 8, 3, 10, 14], fee = 3
console.log(maxProfit(prices, fee))