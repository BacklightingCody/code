/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
// var hammingDistance = function (x, y) {
//   let num1 = x.toString(2)
//   let num2 = y.toString(2)
//   let len1 = num1.length
//   let len2 = num2.length
//   let res = 0
//   let max = Math.max(len1, len2)
//   if (len1 > len2) {
//     num2 = num2.padStart(len1, 0)
//   } else {
//     num1 = num1.padStart(len2, 0)
//   }
//   console.log(num1, num2)
//   for (let i = 0; i < max; i++) {
//     if (num1[i] != num2[i]) {
//       res++
//     }
//   }
//   return res
// };
var hammingDistance = function (x, y) {
  // 1. 通过按位异或得到 x 和 y 不同的位
  let xor = x ^ y;
  let res = 0;
  console.log(xor)
  // 2. 统计异或结果中二进制表示为1的位数
  while (xor > 0) {
    res += xor & 1;  // 判断最后一位是否为 1
    console.log(res)
    console.log(xor)
    xor >>= 1;       // 右移一位，处理下一位
  }
  
  return res;
};
// var hammingDistance = function (x, y) {
//   const s = (x ^ y).toString(2)
//   let count = 0
//   for (let c of s) {
//       if (c === '1') {
//           count += 1
//       }
//   }
//   return count
// };
// 三种方法，两种二进制，一种暴力
// const x = 1, y = 4
// const x = 93, y = 73cvvvvvvvvvvvvvvvn  
const x = 14, y = 4
console.log(hammingDistance(x, y))