/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = x.toString().split(``).reverse().join(``);
  if (str[str.length - 1] === `-`) {
    str = `-` + str.slice(0, str.length - 1);
  }

  return Number(str) > -Math.pow(2, 31) && Number(str) < Math.pow(2, 31) - 1 ? Number(str) : 0;
};
const x = -123;
// const x = 120
console.log(reverse(x))