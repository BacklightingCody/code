let arr = readline()
// 读取到数据
// 使用堆栈理念来实现添加删除操作
// str dbbdut
const str = arr
function removeDuplicates (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  console.log(stack.join(''))
  return stack.join('');
}
removeDuplicates(str)