/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let str = ''
    // strs = [...new Set(strs)]
    if (strs.length === 1) {
        return strs[0];
    }
    let slice = strs[0].length;
    for (let i = 0; i < slice; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                slice = i;
                break;
            }
        }
    }
    str = strs[0].slice(0, slice);
    return str
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]))