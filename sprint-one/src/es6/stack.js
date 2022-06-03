class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.ticket = 0;
    this.serving = 0;
    this.height = 0;
  }
  push(value) {
    this.storage[this.ticket] = value;
    this.ticket++;
    this.height++;
    this.serving = this.ticket -1;
  }

  pop() {
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

  size() {
    return this.height;
  }

}