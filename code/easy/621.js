/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const len = tasks.length
  const set = new Set(tasks)
  if (n === 0) return len  //没有冷却
  if (set.size === len) return len  //没有重复
  const map = new Map()
  for (let i = 0; i < len; i++) {
    const key = tasks[i]
    map.set(key, map.has(key) ? map.get(key) + 1 : 1)
  }
  const arr = [...map.values()]
  arr.sort((a, b) => b - a)
  const max = arr[0]
  let maxCount = 0;
  for (let count of arr) {
    if (count === max) {
      maxCount++;
    }
  }

  // 计算结果
  const partCount = max - 1;
  const partLength = n - (maxCount - 1);
  const emptySlots = partCount * partLength;
  const availableTasks = len - max * maxCount;
  const idles = Math.max(0, emptySlots - availableTasks);

  return len + idles;
};
const tasks = ["A", "A", "A", "B", "B", "B"], n = 2
console.log(leastInterval(tasks, n))