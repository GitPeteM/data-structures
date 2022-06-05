var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.ticket = 0;
  this.serving = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.ticket] = value;
  this.ticket++;
  this.length++;
};

Queue.prototype.dequeue = function () {
  if (this.length === 0) {
    return this.length;
  } else {
    var result = this.storage[this.serving];
    delete this.storage[this.serving];
    this.serving++;
    this.length--;
    return result;
  }
};

Queue.prototype.size = function () {
  return this.length;
};

