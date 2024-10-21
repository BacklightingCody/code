/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n === 1) return 1
  let count = 1
  while (n >= count) {
    n -= count
    count++
  }
  return count - 1
}

const n = 5
console.log(arrangeCoins(n))