var Queue = function() {
   var someInstance = {};
   someInstance.storage = {};
   someInstance.length = 0;
   someInstance.ticket = 0;
   someInstance.serving = 0;
   _.extend(someInstance, queueMethods);

   return someInstance;
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.ticket] = value;
  this.ticket++;
  this.length++;
};

queueMethods.dequeue = function () {
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

queueMethods.size = function () {
  return this.length;
};