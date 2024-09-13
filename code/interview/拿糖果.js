// 小明有N袋糖果，每次可以从所有非空的糖果袋子中分别拿出x个糖果，
// x大于0且小于等于每个非空袋子中糖果的数量，如果想把所有的糖果拿完，最少需要拿几次?

function takeCanddy (arr) {
  let count = 0;
  arr = arr.filter(item => item > 0);
  while (arr.length > 0) {
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i] -= min;
    }
    arr = arr.filter(item => item > 0);
    count++;
  }
  return count;
}


const nums = [1, 5, 0, 3, 5]
console.log(takeCanddy(nums))