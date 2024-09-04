/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let len = nums.length
    for (let i = 0; i <=len - 1; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    };
    return nums.length
}
const nums = [3, 2, 2, 3]
console.log(removeElement(nums, 3))