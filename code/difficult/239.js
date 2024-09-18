/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = []
  let queue = []
  for (let left = 0, right = k; right <= nums.length; left++, right++) {
    queue = nums.slice(left, right)
    result.push(Math.max(...queue))
  }
  return result
};

const nums = [1, 3, -1, -3, 5, 3, 6, 7]
const k = 3
console.log(maxSlidingWindow(nums, k))