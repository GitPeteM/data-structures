var Stack = function() {
  this.storage = {};
  this.ticket = 0;
  this.serving = 0;
  this.height = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function (value) {
  this.storage[this.ticket] = value;
  this.height++;
  this.ticket++;
  this.serving = this.ticket - 1;
};

Stack.prototype.pop = function () {
  if (this.height === 0) {
    return this.height;
  } else {
    var result = this.storage[this.serving];
    delete this.storage[this.serving];
    this.serving--;
    this.height--;
    return result;
  }
};

Stack.prototype.size = function () {
  return this.height;
};

