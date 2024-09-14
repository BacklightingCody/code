const n = 5;
const nums = [1, 2, 3, 4, 5]
function splitNums (n, nums) {
  let total = 0
  let min = Infinity
  let left = 0
  for (let i = 0; i < n; i++) {
    total += nums[i]
  }
  for (let i = 0; i < n - 1; i++) {
    left += nums[i]
    let right = total - left
    min = Math.min(min, left * right)
  }
  return min
}
console.log(splitNums(n, nums))
