/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 三数之和，先固定一个，然后从固定的元素之后采用双指针算法，sum>0,右指针--，sum<0，左指针++
// 开启while循环，条件为left<right，获取当前i元素所有可能的组合，并且需要筛选掉可能重复的组合
// 一般重复的组合就是当前数的下一个数与这个数相同，我们就直接跳过
var threeSum = function (nums) {
  const res = [];
  nums.sort((a, b) => a - b);  // 先排序

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;  // 跳过重复的 nums[i]

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);

        // 去重，跳过相同的 left 和 right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;  // 如果和小于 0，左指针右移
      } else {
        right--;  // 如果和大于 0，右指针左移
      }
    }
  }

  return res;
};

const nums = [-1, 0, 1, 2, -1, -4]
// const nums = [0, 0, 0, 0]
console.log(threeSum(nums));