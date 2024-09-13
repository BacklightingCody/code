/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let n = nums.length, maxLen = 0, ans = 0;
  const dp = new Array(n).fill(0);
  const cnt = new Array(n).fill(0);
  for (let i = 0; i < n; ++i) {
    dp[i] = 1;
    cnt[i] = 1;
    for (let j = 0; j < i; ++j) {
      // 首先沿用最基础的最长递归子序列的方法，判断是否掐面的数字比自己小，如果小，则自己的长度在其基础上加1
      // 既然加1了，说明延长了子序列，那么计数应该与上一个比较的j的节点的count数量一致
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          cnt[i] = cnt[j]; // 重置计数
          // 同时需要在此还需要对计数进行额外处理比如，1,3,5,4,7
          // 其中最长子序列为1357和1347，达到5和4只有1中，但是到达7有两种，在比较的过程中，当然不能让7所处的位置一直++
          // 即7作为最长子序列的最大值，前面可能有很多小于他的数并且位于不同的最长子序列中，我们需要避免此类情况，在每次终点处判断这个到达这个节点是否有多种方法
        } else if (dp[j] + 1 === dp[i]) {
          cnt[i] += cnt[j];
        }
      }
    }
    // 然后每次更新最长子序列长度以及计数
    if (dp[i] > maxLen) {
      // 如果这次的节点加入后比maxLen更大,则说明最长子序列更长了,应该重置,重置的次数即为到达这个节点的方法数量
      maxLen = dp[i];
      ans = cnt[i]; // 重置计数
      // 否则即为另一种不同的方式,相当于并列的最长递增子序列
    } else if (dp[i] === maxLen) {
      ans += cnt[i];
    }
  }
  return ans;
}
const nums = [1, 2, 4, 3, 5, 4, 7, 2]
const nums2 = [2, 2, 2, 2, 2]
console.log(findNumberOfLIS(nums2));
