/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 第一种，暴力循环
var isValidSudoku = function (board) {
  const len = 9
  // 检验横排
  for (let i = 0; i < len; i++) {
    const set = new Set()
    for (let j = 0; j < len; j++) {
      const item = board[i][j]
      if (item !== '.') {
        if (set.has(item)) return false
        set.add(item)
      }
    }
  }
  // 检验竖排
  for (let i = 0; i < len; i++) {
    const set = new Set()
    for (let j = 0; j < len; j++) {
      const item = board[j][i]
      if (item !== '.') {
        if (set.has(item)) return false
        set.add(item)
      }
    }
  }
  // 检验每个3x3的格子
  for (let i = 0; i < len; i += 3) {
    for (let j = 0; j < len; j += 3) {
      const set = new Set();
      // 遍历3x3格子
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          const item = board[i + m][j + n];
          if (item !== '.') {
            if (set.has(item)) return false;
            set.add(item);
          }
        }
      }
    }
  }
  return true
};
// 第二种，减少循环次数，但是需要生成数组，实际上是空间与时间均增加
var isValidSudoku = function (board) {
  const len = 9;
  const rows = Array.from({ length: len }, () => new Set());
  const columns = Array.from({ length: len }, () => new Set());
  const boxes = Array.from({ length: len }, () => new Set());

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const item = board[i][j];
      if (item === '.') continue;

      // 检查行
      if (rows[i].has(item)) return false;
      rows[i].add(item);

      // 检查列
      if (columns[j].has(item)) return false;
      columns[j].add(item);

      // 检查3x3格子
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxes[boxIndex].has(item)) return false;
      boxes[boxIndex].add(item);
    }
  }

  return true;
};
// const board =
//   [["5", "3", ".", ".", "7", ".", ".", ".", "."]
//     , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//     , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//     , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//     , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//     , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//     , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//     , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//     , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
const board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."]]
console.log(isValidSudoku(board))