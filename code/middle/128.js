/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  const arr1 = [...new Set(nums)];
  const arr = arr1.sort((a, b) => a - b);
  let max = 0;
  let count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 === arr[i + 1]) {
      count++;
    } else {
      max = Math.max(count, max);
      count = 1;
    }
  }
  return Math.max(count, max);
};

// const nums = [];
const nums1 = [100, 4, 200, 1, 3, 2];

// console.log(longestConsecutive(nums1));
console.log(longestConsecutive(nums1));
