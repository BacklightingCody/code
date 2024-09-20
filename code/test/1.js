// 基本数据类型没有属性，但是由于装箱机制，会在操作的那一步，把基本数据类型转换为对象，所以可以给基本数据类型添加属性。
// 但是那一步结束后，基本数据类型就恢复成原来的样子了。
const a = 'name';
a.age = 1;
console.log(a.age)
console.log(delete a.age)
console.log(delete a)  //非严格模式下返回false,严格模式下将直接报错

// 根据mdn官方的可得：
// 如果您尝试删除的属性不存在，则 delete 将不起作用，并将返回 true。
// delete only 对自己的属性有影响。如果对象的 prototype 链上存在同名的属性，则在删除后，该对象将使用 prototype 链中的属性。
// 无法删除不可配置的属性。这包括内置对象的属性，如 Math、Array、Object 以及使用 Object.defineProperty（） 等方法创建为不可配置的属性。
// 删除变量（包括函数参数）永远不会起作用。delete 变量将在严格模式下抛出 SyntaxError，在非严格模式下不会产生任何影响。