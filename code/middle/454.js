/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const map = new Map(); // 哈希表，用于存储 nums1 和 nums2 的和及其出现次数
  let count = 0; // 结果计数器

  // 遍历 nums1 和 nums2，计算所有可能的和，并存入哈希表
  for (const num1 of nums1) {
    for (const num2 of nums2) {
      const sum = num1 + num2;
      map.set(sum, (map.get(sum) || 0) + 1); // 更新哈希表
    }
  }

  // 遍历 nums3 和 nums4，计算所有可能的和，并在哈希表中查找相反数
  for (const num3 of nums3) {
    for (const num4 of nums4) {
      const sum = num3 + num4;
      if (map.has(-sum)) {
        count += map.get(-sum); // 累加对应的次数
      }
    }
  }

  return count;
};
console.log(fourSumCount([1,2],[-2,-1],[-1,2],[0,2]))
