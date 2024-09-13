function matrixSum (n, operations) {
  let m = operations.length
  const arr = new Array(n).fill().map(() => {
    return new Array(n).fill(0)
  });
  console.log(arr)
  for (let i = 0; i < m; i++) {
    const [x, y, val] = operations[i];
    if (x === 0) {
      for (let j = 0; j < n; j++) {
        arr[y][j] = val
      }
    } else if (x === 1) {
      for (let j = 0; j < n; j++) {
        arr[j][y] = val
      }
    }
  }
  return arr.reduce((total, curRow) => {
    return total + curRow.reduce((all, cur) => {
      return all + cur
    }, 0)
  }, 0)

}
const n = 3
const operations = [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]]
console.log(matrixSum(n, operations))