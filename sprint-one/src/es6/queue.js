class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {

    this.addedLast = 0;
    this.firstValue = 0;
  }

  // first in / last out
  enqueue(value) {
    // Add a value to the queue
    this.addedLast++;
    this[this.addedLast] = value;
  }

  dequeue() {
    // remove a value from the queue
    if (this.addedLast - this.firstValue > 0) {
      this.firstValue++;
      var firstProp = this[this.firstValue];
      delete this[this.firstValue];
      return firstProp;
    }

  }

  size() {
    return this.addedLast - this.firstValue;

  }


}

// var queueMethods = new Queue();
