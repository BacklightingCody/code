/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
// var longestSubsequence = function (arr, difference) {
//   const m = arr.length;
//   const dp = new Array(m).fill(1);
//   for (let i = 1; i < m; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[i] - arr[j - 1] === difference) {
//         dp[i] = Math.max(dp[i], dp[j - 1] + 1)
//       }
//     }
//   }
//   return Math.max(...dp)
// };
// 超出时间
var longestSubsequence = function (arr, difference) {
  const dp = new Map(); // 用于记录每个数字结尾的最长子序列长度
  let maxLen = 1; // 初始化最大长度为1

  for (let num of arr) {
    let prevLen = dp.get(num - difference) || 0; // 获取以num - difference为结尾的子序列长度
    dp.set(num, prevLen + 1); // 更新以num结尾的子序列长度
    maxLen = Math.max(maxLen, dp.get(num)); // 更新最大长度
  }
  console.log(dp)
  return maxLen;
};

// const arr = [1, 5, 7, 8, 5, 3, 4, 2, 1], difference = -2
// const arr = [1,3,5,7], difference = 1
const arr = [6, -2, 0, 3, -7, 6, -5, -8], difference = -5
// const arr = [1, 2, 3, 4], difference = 1
console.log(longestSubsequence(arr, difference))