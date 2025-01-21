/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if (nums.length === 0) return 0;
    if(nums.includes(target)) return 1;
    let left = 0;
    let right = 0;
    let sum = 0;
    let min = Infinity;
    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            min = Math.min(min, right - left + 1);
            sum -= nums[left];
            left++;
        }
        right++;
    }
    return min === Infinity ? 0 : min;
};
const target = 7;
const nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums)); // 2