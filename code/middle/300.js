/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return dp[nums.length - 1]
}


const nums = [10, 9, 2, 5, 3, 7, 101, 18]
const nums1 = [4, 10, 4, 3, 8, 9]
console.log(lengthOfLIS(nums));