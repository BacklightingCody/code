/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(1);
  const expandAroundCenter = (left, right) => {
    let max = 1;
    while (left >= 0 && right < n && s[left] === s[right]) {
      max = right - left + 1
      left--;
      right++
    }
    return max;
  };

  for (let i = 0; i < n ; i++) {
    // 扩展以s[i]为中心的奇数长度回文
    const oddLength = expandAroundCenter(i, i);
    // 扩展以s[i]和s[i+1]为中心的偶数长度回文
    const evenLength = expandAroundCenter(i, i + 1);
    // 记录以s[i]为中心的最长回文子串长度
    dp[i] = Math.max(oddLength, evenLength);
  }
  const max = Math.max(...dp);
  const half = Math.floor(max / 2)
  const start = max % 2 === 0 ? dp.indexOf(max) - half + 1 : dp.indexOf(max) - half
  return s.slice(start, start + max);
};

const s = 'aa'
console.log(longestPalindrome(s))