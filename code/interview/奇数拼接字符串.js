


const n = 3
const strs = ['abc', 'ab', 'a']

function oddStr (n, strs) {
  let str = ''
  for (let i = 0; i < n; i++) {
    if (strs[i].length % 2 !== 0) {
      str += strs[i]
    }
  }
  return str
}
console.log(oddStr(n, strs))