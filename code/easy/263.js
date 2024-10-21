/**
 * @param {number} n
 * @return {boolean}
 */

// 刚开始的思路是先拿到所有的因数，并且检查一下是否质因数只在2,3,5范围之内
// var isUgly = function (n) {
//   if (n < 0) return false
//   if (n <=2 ) return true
//   function isPrime (num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false
//     }
//     return true
//   }
//   const res = []
//   for (let i = 2; i <=n; i++) {
//     if (n % i === 0) {
//       res.push(i)
//     }
//   }
//   if (!res.includes(2) && !res.includes(3) && !res.includes(5)) {
//     return false
//   }
//   return res.every(item => {
//     if (item !== 2 && item !== 3 && item !== 5 && isPrime(item) === true) {
//       return false
//     }
//     return true
//   })
// };
// 但是上面这个超时，因为数字足够大后，运行的太多了
// 所以换一种思路，既然是丑数，那就先除以2，3，5，直到不能再除，然后判断是否是质数，如果不是质数就返回false

var isUgly = function (n) {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
};
const n = 5;
// const n = 14
// const n = 5
console.log(isUgly(n));