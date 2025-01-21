/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map(item => item * item).sort((a, b) => a - b);
};

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); // [0, 1, 9, 16, 100]