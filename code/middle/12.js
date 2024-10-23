/**
 * @param {number} num
 * @return {string}
 */
// 列出罗马数字的可能，然后遍历每次减去自身可以减去的最大的数，拼接字符串
// var intToRoman = function (num) {
//   const map = new Map([
//     [1, 'I'],
//     [4, 'IV'],
//     [5, 'V'],
//     [9, 'IX'],
//     [10, 'X'],
//     [40, 'XL'],
//     [50, 'L'],
//     [90, 'XC'],
//     [100, 'C'],
//     [400, 'CD'],
//     [500, 'D'],
//     [900, 'CM'],
//     [1000, 'M']
//   ])
//   let res = ''
//   while (num > 0) {
//     const key = [...map.keys()].sort((a, b) => b - a).find(k => k <= num)
//     res += map.get(key)
//     num -= key
//   }
//   return res
// };
// 但是上述方法在数字比较大时会显得比较费时，下面这种更适合处理大数字
var intToRoman = function(num) {
  const  arr = [
      ['', 'M','MM','MMM'], //千位
      ['', 'C', 'CC', 'CCC', 'CD', 'D','DC','DCC','DCCC','CM'], // 百位
      ['', 'X', 'XX',' XXX', 'XL','L','LX','LXX','LXXX','XC'], // 十位
      ['', 'I', 'II', 'III', 'IV','V','VI','VII','VIII','IX'] // 个位
  ]
  return arr[0][Math.floor(num / 1000)].trim() +
          arr[1][Math.floor(num % 1000 / 100)].trim() +
          arr[2][Math.floor(num % 100 / 10)].trim() +
          arr[3][num % 10].trim()
};
// const num = 58
const num = 3749
console.log(intToRoman(num))