async function f1(){
  console.log(1)
}
async function f2(){
  console.log(2)
  await console.log(3)
  console.log(5)
}
function f3(){
  console.log(4)
}
f1()
f2()
f3()

// async 函数在调用时会立即返回一个 Promise 对象，这部分是同步的，但它内部的代码（尤其是 await 后的代码）可能是异步的。
// await 是执行 await 后面的代码，然后 await 下面的加入微队列：这部分大致正确，但要明确的是，await 会暂停 async 函数的执行，直到它等待的 Promise 完成。await 后面的代码会加入微任务队列。