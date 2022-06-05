class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.counter = 0;
  }

  // first in / last out

  push(value) {
    // Add value to stack.
    this.counter++;
    this[this.counter] = value;
  }

  pop() {
    // remove value from stack
    if (this.counter > 0) {
      var lastProperty = this[this.counter];
      delete this[this.counter];
      this.counter--;
      return lastProperty;
    }
  }

  size() {
    return this.counter;

  }

}

// var queueMethods = new Stack();