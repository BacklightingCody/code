/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const len = nums.length;
  const dp = Array.from({ length: len }, () => new Map());
  let maxLen = 2; // 最小长度是 2，因为至少需要两个数构成等差数列

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      const diff = nums[i] - nums[j];
      // 如果 j 位置的差值序列存在，则延续该序列
      const seqLen = dp[j].get(diff) || 1;
      dp[i].set(diff, seqLen + 1); // 将序列长度更新到 i 位置
      maxLen = Math.max(maxLen, dp[i].get(diff)); // 更新最长等差序列长度
    }
  }
  console.log(dp)
  return maxLen;
};
const nums = [3, 6, 9, 12]
console.log(longestArithSeqLength(nums))