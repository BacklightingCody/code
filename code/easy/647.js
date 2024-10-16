/**
 * @param {string} s
 * @return {number}
 */

// 暴力解法
// var countSubstrings = function (s) {
//   let res = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       // 判断回文字串
//       let temp = s.slice(i, j + 1);
//       let temp2 = temp.split("").reverse().join("");

//       if (temp === temp2) {
//         res++;
//       }
//     }
//   }
//   return res;
// };
// 优化，中心拓展法，左右指针
var countSubstrings = function (s) {
  let res = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // 奇数长度的回文子串，以 i 为中心
    expandAroundCenter(i, i);
    // 偶数长度的回文子串，以 i 和 i + 1 为中心
    expandAroundCenter(i, i + 1);
  }

  return res;
};
// const s = "aaa"
const s = "abc"
console.log(countSubstrings(s));