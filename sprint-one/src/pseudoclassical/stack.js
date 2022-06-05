var Stack = function() {
  this.storage = {};
  this.ticket = 0;
  this.serving = 0;
  this.height = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.counter = 0;
};
//last in / First Out
Stack.prototype.push = function (value) {
  this.counter++;
  this[this.counter] = value;


};

Stack.prototype.pop = function () {
  // check if there is anything in the stack
  if (this.counter > 0) {
    var lastProperty = this[this.counter];
    delete this[this.counter];
    this.counter--;
    return lastProperty;
  }

};

Stack.prototype.size = function () {
  return this.counter;

};

