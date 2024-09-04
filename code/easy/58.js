/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim()
    return s.split(" ").pop().length
};
const s = "Hello World  "
console.log(lengthOfLastWord(s))
// console.log(s)