/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0;
  let temp = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (temp.indexOf(s[i]) !== -1) {
      temp.splice(0, temp.indexOf(s[i]) + 1);
    }
    temp.push(s[i]);
    max = Math.max(temp.length, max);
  }
  return max;
};
const s = "dvdf";
// const s =' '
console.log(lengthOfLongestSubstring(s));
