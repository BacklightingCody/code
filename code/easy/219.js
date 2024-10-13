/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map();
  const n = nums.length
  for (let i = 0; i < n; i++) {
    if (map.has(nums[i])) {
      const index = map.get(nums[i])
      if (i - index <= k) {
        return true;
      }
    }
    map.set(nums[i], i)
  }
  return false
};
// const nums = [1, 2, 3, 1], k = 3
const nums = [1,2,3,1,2,3], k = 2
console.log(containsNearbyDuplicate(nums, k))