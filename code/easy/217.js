/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (set.has(nums[i])) {
      return true
    } else {
      set.add(nums[i])
    }
  }
  return false
};
// const nums = [1, 2, 3, 1]
const nums = [1,2,3,4]
console.log(containsDuplicate(nums))