/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));

  while (left <= right) {
    const sum = left * left + right * right;
    
    if (sum === c) {
      return true;
    } else if (sum < c) {
      left++;
    } else {
      right--;
    }
  }
  
  return false;
};

// var judgeSquareSum = function(c) {
//   for (let a = 0; a * a <= c; a++) {
//       const b = Math.sqrt(c - a * a);
//       if (b === parseInt(b)) {
//           return true;
//       }
//   }
//   return false;
// };


const c = 6;
console.log(judgeSquareSum(c)); // Expected output: false
