var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.ticket = 0;
  someInstance.serving = 0;
  someInstance.height = 0;

  return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.counter++;
  this[this.counter] = value;

};

stackMethods.pop = function() {

  if (this.counter > 0) {
    var lastProp = this[this.counter];
    delete this[this.counter];
    this.counter --;
    return lastProp;
  }

};

stackMethods.size = function () {
  return this.counter;

};


