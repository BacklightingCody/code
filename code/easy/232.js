
var MyQueue = function () {
  this.items = []
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  this.items.push(x)
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function () {
  if (this.empty()) return null
  return this.items.shift()
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function () {
  if (this.empty()) {
  return null; // 栈空时返回 null
}
return this.items[0];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  return this.items.length === 0;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/