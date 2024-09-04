/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let len = Math.max(a.length, b.length);
    let carry = 0;
    let res = '';
    for (let i = 0; i < len || carry > 0; ++i) {
        const x = i >= a.length ? 0 : parseInt(a[a.length - i - 1]);
        const y = i >= b.length ? 0 : parseInt(b[b.length - i - 1]);
        const sum = x + y + carry;
        carry = sum / 2 | 0;
        res += sum % 2;
    }
    return res.split('').reverse().join('');
};

console.log(addBinary('010', '1'));