/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
  if (nums.length < 2) return true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == nums[i + 1] % 2) {
      return false;
    }
  }
  return true;
};

const nums = [1, 2,3];
const nums1 = [1];

console.log(isArraySpecial(nums));
console.log(isArraySpecial(nums1));
