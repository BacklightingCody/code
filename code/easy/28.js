/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle.length) { return 0 }
    if (haystack.length < needle.length) {return -1}
    if (haystack.includes(needle)) {
        return haystack.indexOf(needle)
    }
    else { return -1 }
};


const haystack = "sadbutsad"
const needle = "sad"
console.log(strStr(haystack, needle))

// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {
//     return haystack.indexOf(needle);
// };