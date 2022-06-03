var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.ticket = 0;
  someInstance.serving = 0;
  someInstance.height = 0;

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.ticket] = value;
  this.ticket++;
  this.height++;
  this.serving = this.ticket -1;
}

stackMethods.pop = function (value) {
  if (this.height === 0) {
    return this.height;
  } else {
    var result = this.storage[this.serving];
    delete this.storage[this.serving];
    this.height--;
    this.serving--;
    return result;
  }
}
stackMethods.size = function () {
  return this.height;
}

