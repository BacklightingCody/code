const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    const arr = [];
    while ((line = await readline())) {
        let tokens = line.split(" ");
        arr.push(...tokens);
    }
    const len = arr[0];
    const arr1 = arr.filter((item, index) => index % 2 == 1);
    const arr2 = arr.filter((item, index) => index % 2 == 0 && index != 0);
    function isSame(arr1, arr2, len) {
        const result = [];
        for (let i = 0; i < len; i++) {
            const queue = [];
            queue.push(...arr1[i].split(""));
            for (let j = 0; j < arr2[i].length; j++) {
                if (queue.indexOf(arr2[i][j]) !== -1) {
                    queue.splice(queue.indexOf(arr2[i][j]), 1);
                }
            }
            if (queue.length === 0) {
                result.push('Yes');
            } else {
                result.push('No');
            }
        }
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }
    isSame(arr1, arr2, len);
})();
