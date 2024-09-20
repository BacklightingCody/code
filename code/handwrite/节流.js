function throttle (func, delay) {
  let timer = null;
  // const context = this  如果下面的setTimeout是function(){func.call()}这样调用需要保存this
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      func.call(this, ...args)
      timer = null   //一定要记得在计时器结束时清楚
    }, delay)
  }
}
function clickThrottle () {
  console.log("throttle")
}
const throttledClick = throttle(clickThrottle, 1000);