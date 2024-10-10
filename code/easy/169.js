/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = nums.length
  const map = new Map()
  for (let i = 0; i < n; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1)
    } else {
      map.set(nums[i], map.get(nums[i]) + 1)
    }
  }
  const half = n / 2
  const arr = [...new Set(nums)]
  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) > half) {
      return arr[i]
    }
  }
};
// var majorityElement = function(nums) {
//   let candidate = undefined
//   let count =0
//   for(let i=0; i<nums.length; i++){
//       if(count===0){
//           candidate=nums[i]
//       }
//       if(nums[i]===candidate){
//           count++
//       }else{
//           count--
//       }
//   }
//   return candidate
// };
// 注释部分是投票算法，高效
const nums = [3, 2, 3]
console.log(majorityElement(nums))