// const n = 4
// const k = 5
const n = 13
const k = 2
function gameDel (n, k) {
  if (n < k) {
    console.log(0)
    return
  }
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let count = 0
  while (arr.length >= k) {
    arr = arr.filter((item, index) => (index + 1) % k !== 0);
    count += 1;
    if (arr.includes(n)) {
      continue;
    } else {
      console.log(count)
      break;
    }
  }
  if (arr.includes(n)) {
    console.log(0)
  }
}
gameDel(n, k)

// 通过50%
// 内存溢出