/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const set = [...new Set(nums)]
    const len = set.length
    if (len <= k) {
        return set;
    }
    const map = new Map();
    set.forEach(item => {
        map.set(item, nums.filter(num => num === item).length)
    })
    const arr = [...map.entries()].sort((a, b) => {
        return b[1] - a[1];
    })
    return arr.map(item => item[0]).slice(0, k);

};


const nums = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4]
const k = 2
console.log(topKFrequent(nums, k))


// 优化
var topKFrequent = function (nums, k) {
    const map = new Map()
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    //b[1],a[1]，表示按照值进行降序排序(频率) b[0],a[0]表示元素本身(键)
    const res = Array.from(map).sort((a, b) => b[1] - a[1])
    //n[0]表示取前k个键(元素本身)
    return res.slice(0, k).map(n => n[0])
};