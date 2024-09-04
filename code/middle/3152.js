/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// var isArraySpecial = function (nums, queries) {
//   function isSpecial(start, end) {
//     const array = nums.slice(start, end + 1);
//     for (let i = 0; i <= array.length - 1; i++) {
//       if ((array[i] - array[i + 1]) % 2 === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   return queries.map(([start, end]) => isSpecial(start, end));
// };
// 当数组长度上升时，会占用过多执行时间，因此不可行，这相当于暴力破解。
var isArraySpecial = function (nums, queries) {
  const len = nums.length;
  const dp = Array(len).fill(1);
  for (let i = 1; i < len; ++i) {
    if ((nums[i] ^ nums[i - 1]) & 1) {
      // 奇数 ^ 偶数 = 奇数
      // 奇数 ^ 奇数 = 偶数
      // 偶数 ^ 偶数 = 偶数
      // 再与1进行与运算，只看最低位，因为1的其他都是0，只能为0
      dp[i] = dp[i - 1] + 1;
    }
  }
  const res = [];
  for (const [start, end] of queries) {
    res.push(dp[end] >= end - start + 1);
  }
  return res;
};
const nums = [4, 3, 1, 6];
const queries = [
  [0, 2],
  [2, 3],
];

console.log(isArraySpecial(nums, queries));
