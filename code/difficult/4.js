/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2]
  const sottArr = arr.sort((a, b) => a - b)
  if (sottArr.length % 2 === 0) {
    return (sottArr[sottArr.length / 2 - 1] + sottArr[sottArr.length / 2]) / 2
  } else {
    return sottArr[Math.floor(sottArr.length / 2)]
  }
};
// const nums1 = [1, 3], nums2 = [2]
const nums1 = [1,2], nums2 = [3,4]
console.log(findMedianSortedArrays(nums1, nums2))