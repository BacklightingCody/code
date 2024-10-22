/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 三数之和升级版
var fourSum = function (nums, target) {
  const res = [];
  const len = nums.length;
  if (len < 4) return res;  // 如果数组长度小于4，直接返回空结果

  nums.sort((a, b) => a - b);  // 排序

  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;  // 去重

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;  // 去重

      let left = j + 1;
      let right = len - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);

          // 避免重复结果，跳过相同的元素
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;  // 如果和小于目标，左指针右移，增大和
        } else {
          right--;  // 如果和大于目标，右指针左移，减小和
        }
      }
    }
  }

  return res;
};
const nums = [1, 0, -1, 0, -2, 2], target = 0
console.log(fourSum(nums, target))