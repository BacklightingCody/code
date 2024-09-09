/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);  // 初始化 dp 数组
  dp[0] = true;  // 空字符串可以被拆分
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // 如果前 j 个字符可以拆分，并且 j 到 i 的子串在字典中
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;  // 当前 i 已经能拆分成功，跳出循环
      }
    }
  }

  return dp[s.length];  // 返回字符串 s 能否被完全拆分
};
const s = "applepenapple"
const wordDict = ["apple", "pen"]
console.log(wordBreak(s, wordDict))