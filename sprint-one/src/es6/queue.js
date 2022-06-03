class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.ticket = 0;
    this.serving = 0;
    this.length = 0;
  }

  enqueue(value) {
    this.storage[this.ticket] = value;
    this.ticket++;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return this.length;
    } else {
      var result = this.storage[this.serving];
      this.length--;
      this.serving++;
      return result;
    }
  }

  size() {
    return this.length;
  }

}
