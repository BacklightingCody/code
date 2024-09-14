const n = 5
const m = 5
const nums = [1, 4, 2, 2, 1]

function charge (n, m, nums) {
  let maxCharged = 0;
  let currentSum = 0;
  let left = 0;
  for (let right = 0; right < n; right++) {
    currentSum += nums[right]
    while (currentSum > m && left <= right) {
      currentSum -= nums[left]
      left++
    }
    maxCharged = Math.max(maxCharged, right - left + 1)
  }
  return maxCharged
}

console.log(charge(n, m, nums))