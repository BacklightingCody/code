/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const arr = nums.sort((a, b) => a - b)
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
};
// const nums = [0, 1, 3]
const nums = [0, 1]
console.log(missingNumber(nums))