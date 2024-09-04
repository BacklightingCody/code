/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length <= 1) return 0;
    let min = prices[0];
    let profit = [0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if (prices[i] - min > 0) {
            profit.push(prices[i] - min);
            min = prices[i];
        }
    }
    return [...profit].sort((a, b) => b - a).slice(0, 2)
};

const prices = [3, 3, 5, 0, 0, 3, 1, 4]
const prices1 = [1, 2, 3, 4, 5]

console.log(maxProfit(prices))
console.log(maxProfit(prices1))