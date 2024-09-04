/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    };
    return nums.length
}
    nums = [1, 1, 2, 2, 3]
    console.log(removeDuplicates(nums))