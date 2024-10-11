/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const arr = new Array(rowIndex + 1).fill().map(() => [])
  arr[0][0] = 1
  for (let i = 1; i <= rowIndex; i++) {
    arr[i][0] = 1
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
    }
    arr[i][i] = 1
  }
  return arr[rowIndex]
}

const rowIndex = 3
console.log(getRow(rowIndex))