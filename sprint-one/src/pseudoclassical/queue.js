var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.ticket = 0;
  this.serving = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.addedLast = 0;
  this.firstValue = 0;
};

//first in / first out

Queue.prototype.enqueue = function(value) {
  // Add value to queue and increment addedLast
  this.addedLast++;
  this[this.addedLast] = value;

};

Queue.prototype.dequeue = function() {
  // check if there are any values in queue
  // delete the first value
  if (this.addedLast - this.firstValue > 0) {
    this.firstValue++;
    var firstProp = this[this.firstValue];
    delete this[this.firstValue];
    return firstProp;
  }

};

Queue.prototype.size = function() {
  return this.addedLast - this.firstValue;

};


// var queueMethods = new Queue();


