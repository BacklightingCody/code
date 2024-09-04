/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0]
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > 0) {
            profit += prices[i] - min
            min = prices[i]
        }
    }
    return profit
};

const prices = [7, 1, 5, 3, 6, 4]
const prices1 = [1, 2, 3, 4, 5]
console.log(maxProfit(prices))
console.log(maxProfit(prices1))