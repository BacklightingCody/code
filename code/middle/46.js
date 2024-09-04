/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = [nums[i]]
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        temp.push(nums[j]);
      }
    }
    result.push(temp);
  }
  return result;
};
const nums = [1, 2, 3];
console.log(permute(nums));
