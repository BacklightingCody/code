/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const n = numRows
  const arr = new Array(n).fill().map(() => [])
  arr[0][0] = 1
  if (n === 2) {
    arr[1] = [1, 1]
    return arr
  }
  for (let i = 1; i < n; i++) {
    arr[i][0] = 1
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
    }
    arr[i][i] = 1; // 每行的最后一个元素也是1
  }
  return arr
};

const numRows = 5
console.log(generate(numRows))