/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//     if (nums.indexOf(target) !== -1) {
//         return nums.indexOf(target)
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > target) {
//             return i;
//         }
//         if(nums[nums.length - 1] < target){
//             return nums.length;
//         }
//     }

// };

// 其实是考察二分法查找
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;

};
const nums = [1, 3, 5, 6]
const target = 7
console.log(searchInsert(nums, target))



