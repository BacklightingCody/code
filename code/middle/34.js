/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const len = nums.length;
  if (len === 0) return ans
  if (len === 1) return nums[0] === target ? [0, 0] : ans
  let left = 0;
  let right = len - 1
  while (left <= right) {
    if (nums[left] === target) {
      ans[0] = left
    }
    if (nums[right] === target) {
      ans[1] = right
    }
    if (ans[0] == -1) {
      left++
    }
    if (ans[1] == -1) {
      right--
    }
    if (ans[0] != -1 && ans[1] != -1) break
  }
  return ans
}
// 题目中说了是数组是非递减的，也就是说只能为递增或相等，所以使用二分法是最合适的
// var searchRange = function (nums, target) {
//   let ans = [-1, -1];

//   const binarySearch = (findFirst) => {
//     let left = 0, right = nums.length - 1, res = -1;
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       if (nums[mid] === target) {
//         res = mid;
//         // 根据 findFirst 决定是继续往左找，还是往右找
//         if (findFirst) right = mid - 1;  // 找起始位置，继续往左
//         else left = mid + 1;  // 找结束位置，继续往右
//       } else if (nums[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//     return res;
//   };

//   ans[0] = binarySearch(true);  // 找起始位置
//   if (ans[0] !== -1) {
//     ans[1] = binarySearch(false);  // 找结束位置
//   }

//   return ans;
// };
// const nums = [5, 7, 7, 8, 8, 10], target = 8
const nums = [5, 7, 7, 8, 8, 10], target = 6
console.log(searchRange(nums, target))