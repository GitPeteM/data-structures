var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.addedLast = 0;
  someInstance.firstValue = 0;
  return someInstance;

};

// first in / first out

var queueMethods = {};
// var Addedlast = 0;
// var firstValue = 0;

queueMethods.enqueue = function(value) {
  this.addedLast++;
  this[this.addedLast] = value;
};

queueMethods.dequeue = function() {
  if (this.addedLast - this.firstValue > 0) {
    this.firstValue++;
    var firstProp = this[this.firstValue];
    delete this[this.firstValue];
    return firstProp;
  }

};

queueMethods.size = function () {
  return this.addedLast - this.firstValue;

};


