/**
* @param {string} digits
* @return {string[]}
*/
var letterCombinations = function (digits) {
  const len = digits.length;
  if (len === 0) return [];  // 边界情况：如果输入为空，返回空数组

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const result = [];  // 用于存储最终结果
  const path = [];    // 用于存储当前构造的组合

  const backtrack = (index) => {
    // 终止条件：当路径长度等于输入数字长度时，说明已构造出一组完整组合
    if (path.length === len) {
      result.push(path.join(''));
      return;
    }

    // 当前处理的数字对应的字母
    const letters = map[digits[index]];

    // 遍历当前数字对应的所有字母
    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]);    // 选择当前字母
      backtrack(index + 1);     // 递归处理下一个数字
      path.pop();               // 回溯，移除当前选择的字母，尝试下一种可能
    }
  };

  // 从第一个数字开始回溯
  backtrack(0);
  return result;
};
const digits = "23";
console.log(letterCombinations(digits));