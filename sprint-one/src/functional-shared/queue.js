var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.Addedlast = 0;
  someInstance.firstValue = 0;
  someInstance.container = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

// Need Addedlast & firstValue to reset
// I have tried adding the var within the Queue function and queueMethods.
// var Addedlast = 0;
// var firstValue = 0;

// first in, first out
queueMethods.enqueue = function(value) {
  this.Addedlast++;
  this.container[this.Addedlast] = value;

};

queueMethods.dequeue = function() {
  // add one to firstValue
  //check if qeue is empty, if so skip dequeue method.
  if (this.Addedlast - this.firstValue > 0) {

    this.firstValue++;
    // console.log(firstValue);
    // get first Property
    var firstProperty = this.container[this.firstValue];
    // delete the first property
    delete this.container[this.firstValue];
    // return the first property
    return firstProperty;
  }

};

queueMethods.size = function () {
  return this.Addedlast - this.firstValue;
};