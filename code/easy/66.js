/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let n = digits.length
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            break
        } else {
            digits[i] = 0
        }
    }
    if (digits[0] == 0) {
        digits.unshift(1)
    }
    return digits
};

const digits = [1, 2, 3]
console.log(plusOne(digits))