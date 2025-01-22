// /**
//  * @param {number[]} price
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (price, target) {
//   let len = price.length;
//   let start = price[0];
//   for (let i = 1; i < len; i++) {
//     if (price.indexOf(target - start) !== -1 && price.indexOf(target - start) !== i) {
//       return [start, price[price.indexOf(target - start)]];
//     }else{
//       start = price[i];
//     }
//   }
// };

// const price = [8, 21, 27, 34, 52, 66]
// const target = 61
// console.log(twoSum(price, target)); // [34,27]

// 优化
// var twoSum = function (price, target) {
//   // 创建一个新数组，保存原始索引和值的映射
//   const indexedPrice = price.map((value, index) => ({ value, index }));

//   // 按价格升序排序
//   indexedPrice.sort((a, b) => a.value - b.value);

//   let left = 0;
//   let right = price.length - 1;

//   while (left < right) {
//     const sum = indexedPrice[left].value + indexedPrice[right].value;

//     if (sum === target) {
//       // 返回原始索引对应的值
//       return [indexedPrice[left].value, indexedPrice[right].value];
//     } else if (sum < target) {
//       left++; // 和太小，左指针右移
//     } else {
//       right--; // 和太大，右指针左移
//     }
//   }

//   return []; // 如果没有找到，返回空数组
// };



var twoSum = function (price, target) {
  const map = new Map(); // 哈希表，存储值到索引的映射

  for (let i = 0; i < price.length; i++) {
    const complement = target - price[i]; // 计算需要的补数
    if (map.has(complement)) {
      // 如果补数在哈希表中，返回结果
      return [complement, price[i]];
    }
    // 将当前值存入哈希表
    map.set(price[i], i);
  }

  return []; // 如果没有找到，返回空数组
};

const price = [8, 21, 27, 34, 52, 66]
const target = 61
console.log(twoSum(price, target)); // [34,27]

