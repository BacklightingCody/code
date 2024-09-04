/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    function convert(str) {
        switch (str) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0; // Default case to handle invalid input
        }
    }
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = convert(s[i]);
        const next = convert(s[i + 1]);
        if (cur < next) {
            res += (next - cur);
            i++; // Skip the next character since it's already processed
        } else {
            res += cur;
        }
    }
    return res;
};



const s = 'IX'; // 9
const s1 = 'LVIII'; // 58

console.log(romanToInt(s));   // 输出 9
console.log(romanToInt(s1));  // 输出 58
