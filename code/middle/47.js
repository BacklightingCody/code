/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  backtrack([], nums, Array(nums.length).fill(false), res);
  return res;
};
function backtrack (state, choices, selected, res) {
  // 当状态长度等于元素数量时，记录解
  if (state.length === choices.length) {
    res.push([...state]);
    return;
  }
  // 遍历所有选择
  const duplicated = new Set();
  choices.forEach((choice, i) => {
    // 剪枝：不允许重复选择元素 且 不允许重复选择相等元素
    if (!selected[i] && !duplicated.has(choice)) {
      // 尝试：做出选择，更新状态
      duplicated.add(choice); // 记录选择过的元素值
      selected[i] = true;
      state.push(choice);
      // 进行下一轮选择
      backtrack(state, choices, selected, res);
      // 回退：撤销选择，恢复到之前的状态
      selected[i] = false;
      state.pop();
    }
  });
}
// const nums = [1, 2, 3];s

const nums = [1, 1, 2]
console.log(permuteUnique(nums));
