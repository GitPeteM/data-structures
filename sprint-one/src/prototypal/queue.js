var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  return someInstance;

};

// first in / first out

var queueMethods = {};
var Addedlast = 0;
var firstValue = 0;

queueMethods.enqueue = function(value) {
  Addedlast++;
  this[Addedlast] = value;
};

queueMethods.dequeue = function() {
  if (Addedlast - firstValue > 0) {
    firstValue++;
    var firstProp = this[firstValue];
    delete this[firstValue];
    return firstProp;
  }

};

queueMethods.size = function () {
  return Addedlast - firstValue;

};


