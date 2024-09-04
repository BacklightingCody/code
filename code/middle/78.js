/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];
  function dfs(index, temp) {
    res.push([...temp]);
    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i]);
      dfs(i + 1, temp);
      temp.pop();
    }
  }
  dfs(0, []);
  return res;
};
const nums = [1, 2, 3];
console.log(subsets(nums));
