/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /[a-zA-Z]/g;
  str = s.match(regex).join('').toLowerCase()

  return str === str.split('').reverse().join('')
};
const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))