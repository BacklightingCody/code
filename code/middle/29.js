/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = -Math.pow(2, 31);
    if (dividend === 0) return 0;
    if (dividend === MIN_INT && divisor === -1) return MAX_INT;
    if (dividend === MIN_INT && divisor === 1) return MIN_INT;
    let sign = true;

    // 需要注意符号
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
        sign = false;
    }
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let result = 0;
    for (let i = 31; i >= 0; i--) {
        if ((absDividend >>> i) >= absDivisor) {  // 使用无符号右移
            result += (1 << i);
            absDividend -= (absDivisor << i);
        }
    }

    result = sign ? result : -result;

    // 检查结果是否溢出
    if (result > MAX_INT) return MAX_INT;
    if (result < MIN_INT) return MIN_INT;

    return result;
}
const dividend = -2147483648
const divisor = 2
console.log(divide(dividend, divisor))