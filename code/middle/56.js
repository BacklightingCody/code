/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const len = intervals.length;
  const result = [];
  if (len === 0) return [];
  if (len === 1) return intervals;

  // 先按区间起始值排序
  intervals.sort((a, b) => a[0] - b[0]);

  let left = intervals[0][0];
  let right = intervals[0][1];

  for (let i = 1; i < len; i++) {
    const [nextLeft, nextRight] = intervals[i];

    // 如果当前区间和下一个区间有重叠
    if (nextLeft <= right) {
      // 合并区间，更新 right
      right = Math.max(right, nextRight);
    } else {
      // 如果没有重叠，将当前区间加入结果
      result.push([left, right]);
      // 更新 left 和 right 为下一个区间
      left = nextLeft;
      right = nextRight;
    }
  }

  // 将最后一个区间加入结果
  result.push([left, right]);

  return result;
};

// const intervals = [[0, 2], [2, 3], [4, 4], [0, 1], [5, 7], [4, 5], [0, 0]]
const intervals2 = [[5,7],[0,0],[2,2],[3,3],[4,4],[3,5]]
// console.log(merge(intervals)); //
console.log(merge(intervals2)); //