/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    if (x === 0) {
        return true;
    }
    if (x % 10 === 0) {
        return false;
    }
    y = x.toString().split(``).reverse().join(``);
    if(String(x) ===y) {
        return true
    }
    return false
};

const a = 123
const b = -121
console.log(isPalindrome(a))
console.log(isPalindrome(b))