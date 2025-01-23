/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  // 初始化一个数组，用于存储最终结果
  const res = [];

  // 如果 words 为空，直接返回空数组
  if (words.length === 0) return res;

  // 统计第一个单词中每个字符的出现次数
  const minCount = new Map();
  for (const char of words[0]) {
    minCount.set(char, (minCount.get(char) || 0) + 1);
  }

  // 遍历剩余的单词，更新每个字符的最小出现次数
  for (let i = 1; i < words.length; i++) {
    const currentCount = new Map();
    for (const char of words[i]) {
      currentCount.set(char, (currentCount.get(char) || 0) + 1);
    }

    // 更新 minCount，取每个字符的最小值
    for (const [char, count] of minCount) {
      if (currentCount.has(char)) {
        minCount.set(char, Math.min(count, currentCount.get(char)));
      } else {
        minCount.delete(char);
      }
    }
  }

  // 根据 minCount 中的字符和出现次数，生成结果数组
  for (const [char, count] of minCount) {
    for (let i = 0; i < count; i++) {
      res.push(char);
    }
  }

  return res;
};


console.log(commonChars(["bella", "label", "roller"]))
