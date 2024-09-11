/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const rob = (arr) => {
    const size = arr.length;
    if (size === 0) return 0;
    const dp = new Array(size).fill(0);
    dp[0] = arr[0];
    dp[1] = Math.max(arr[0], arr[1]);
    for (let i = 2; i < size; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
    }
    return dp[size - 1];
  }
  let maxVal = 0;
  for (const val of nums) {
    maxVal = Math.max(maxVal, val);
  }
  const sum = new Array(maxVal + 1).fill(0);
  for (const val of nums) {
    sum[val] += val;
  }
  return rob(sum)

};
const nums = [2, 2, 3, 3, 3, 4]
console.log(deleteAndEarn(nums))