/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashTable = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashTable.has(complement)) {
            return [hashTable.get(complement), i];
        }
        hashTable.set(nums[i], i);
        console.log(hashTable)
    }
    return [];
};
const nums = [3,2,4]
const target = 6
console.log(twoSum(nums, target))
