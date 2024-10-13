var MyStack = function () {
  this._data = []
  return this
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function (x) {
  this._data.unshift(x)
};

/**
* @return {number}
*/
MyStack.prototype.pop = function () {
  return this._data.shift()
};

/**
* @return {number}
*/
MyStack.prototype.top = function () {
  return this._data[0]
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function () {
  return this._data.length === 0
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/