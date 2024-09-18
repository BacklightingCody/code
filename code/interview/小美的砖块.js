const n = 3;//数据组数
//a,b,c,x,y x个红的可以合成一个蓝的，y个蓝的可以合成一个绿的，只能合成不能分解，一套为红蓝绿各一个
const arr1 = [1, 2, 3, 4, 2];  //1  因为只有一个红的，所以蓝的没必要合成
const arr2 = [10, 2, 1, 4, 2]//2 红的合成蓝的，蓝的合成绿的正好
const arr3 = [8, 4, 1, 4, 2]
const arr = [arr1, arr2, arr3]
console.log(arr)
function accumulate (n, arr) {
  const result = []
  for (let i = 0; i < n; i++) {
    let [a, b, c, x, y] = arr[i]
    result.push(maxSets(a, b, c, x, y))
  }
  for (let i = 0; i < result.length; i++) {
    console.log(result[i])
  }
  return result
}
// 暴力枚举
// function maxSets (a, b, c, x, y) {
//   // 初始化最大套装数为0
//   let maxSets = 0;

//   // 遍历可能的红砖合成情况
//   for (let redUsed = 0; redUsed <= a; redUsed++) {
//     // 用掉 redUsed 个红砖合成蓝砖
//     let remainingRed = a - redUsed;
//     let additionalBlue = Math.floor(remainingRed / x);

//     // 当前可用的蓝砖数是原始蓝砖数加上合成的蓝砖数
//     let totalBlue = b + additionalBlue;

//     // 遍历可能的蓝砖合成情况
//     for (let blueUsed = 0; blueUsed <= totalBlue; blueUsed++) {
//       // 用掉 blueUsed 个蓝砖合成绿砖
//       let remainingBlue = totalBlue - blueUsed;
//       let additionalGreen = Math.floor(remainingBlue / y);

//       // 当前可用的绿砖数是原始绿砖数加上合成的绿砖数
//       let totalGreen = c + additionalGreen;

//       // 计算当前情况下最多可以组成的套数
//       let currentSets = Math.min(redUsed, blueUsed, totalGreen);

//       // 更新最大套装数
//       maxSets = Math.max(maxSets, currentSets);
//     }
//   }

//   return maxSets;
// }

// 动态规划


console.log(accumulate(n, arr))

