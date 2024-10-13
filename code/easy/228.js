/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const n = nums.length
  const arr = []
  let index = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] + 1 != nums[i + 1]) {
      if (index == i) {
        arr.push(`${nums[i]}`)
        index = i + 1
      } else {
        arr.push(`${nums[index]}->${nums[i]}`)
        index = i + 1
      }

    }
  }
  return arr
};
const nums = [0, 1, 2, 4, 5, 7]
console.log(summaryRanges(nums))