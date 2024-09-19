const n = 2
const data = [[10, 4, 1, [2, 3, 5, 7]], [10, 1, 3, [6]]]
function box (n, data) {
  const result = []
  for (let i = 0; i < n; i++) {
    res = joinBox(data[i][0], data[i][1], data[i][2], data[i][3])
    console.log(res)
  }
  function joinBox (N, n, c, arr) {
    const dp = new Array(N + 1).fill(false)
    dp[0] = true;
    for (let i = 0; i < n; i++) {
      for (let j = N; j >= arr[i]; j--) {
        dp[j] = dp[j] || dp[j - arr[i]]
      }
    }
    for (let i = 1; i <= N; i++) {
      if (dp[i]) {
        let remain = N - i
        if (remain <= c) {
          return 'YES'
        }
      }
    }
    return 'NO'
  }
}

console.log(box(n, data))