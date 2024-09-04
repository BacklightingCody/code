/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0; // 左指针
  let r = height.length - 1; // 右指针
  let max = 0; // 最大面积

  while (l < r) {
    // 计算当前面积
    const currentArea = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(max, currentArea);

    // 移动指向较小高度的指针
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
};
const height = [1, 2, 3, 4, 5, 25, 24, 3, 4];
console.log(maxArea(height));

console.log(Boolean(""));
