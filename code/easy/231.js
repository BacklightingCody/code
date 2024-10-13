/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let x = Math.ceil(Math.sqrt(n))
  let res
  for (let i = 0; i <= x; i++) {
    res = Math.pow(2, i)
    console.log(res)
    if (res == n) {
      return true
    }
    if (res > n) {
      return false
    }
  }
  return res === n
};
// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfTwo = function(n) {
//   if(n >0 && (n & (n -1)) ==0)
//     {
//         return true
//     }
//     return false
//  };
// 位运算更快更简单
const n = 3
console.log(isPowerOfTwo(n))