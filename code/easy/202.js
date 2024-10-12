/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seen = new Set(); // To track numbers we have already encountered
  // 涉及到循环出现的数字一般想到通过set来结束循环
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let sum = 0;
    while (n > 0) {
      let digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n === 1; // If n becomes 1, it's a happy number
};
const n = 19
console.log(isHappy(n))
