/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let str = num.toString()
  while (str.length > 1) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i])
    }
    str = sum.toString()
  }
  return str
};
// const num = 38 
const num = 0
console.log(addDigits(num))