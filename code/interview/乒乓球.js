const a = ['A', 'B', 'C', 'B', 'A']
const b = ['A', 'A', 'B', 'B']
function getResult (a, b) {
  const a1 = new Map()
  const b1 = new Map()
  for (let i = 0; i < a.length; i++) {
    if (a1.has(a[i])) {
      a1.set(a[i], a1.get(a[i]) + 1)
    } else {
      a1.set(a[i], 1)
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (b1.has(b[i])) {
      b1.set(b[i], b1.get(b[i]) + 1)
    } else {
      b1.set(b[i], 1)
    }
  }
  for (let [key, value] of b1) {
    if (a1.has(key)) {
      if (a1.get(key) - value >= 0) { }
      else {
        console.log('No')
        return
      }
    } else {
      console.log('No')
      return
    }
  }
  console.log('Yes')
}

console.log(getResult(a, b))