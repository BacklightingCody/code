/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }
    let a = 1   //上上一次爬楼梯的方法
    let b = 2   //上一次爬楼梯的方法
    let c
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c
};
console.log(climbStairs(6))

var climbStairs = function(n) {
    const dp = []
    dp[0] = 1
    dp[1] = 1
    for(let i=2 ;i<=n ;i++){
     dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
 };

//  动态规划思想
// 使用一个数组记录，每次取前面的值，还可以留存记录