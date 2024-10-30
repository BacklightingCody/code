/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  let arr = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (arr[i] === 0 && arr[i + 1] === 0) {
      i += 1
      continue
    }
    if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 || arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        break
      }

    }
  }
  return arr.join('')
};
const s = "45320"
console.log(getSmallestString(s))