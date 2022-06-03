var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var objInstance = {};
  objInstance.counter = 0;
  objInstance.container = {};

  _.extend(objInstance, stackMethods);
  return objInstance;
  // extend(newGiraffe, giraffeMaker.giraffeMethods)
};

var stackMethods = {};

// first in/ first out
stackMethods.push = function (value) {
  // increment the current counter
  // add counter a key and input value as the value to stackMethods.

  this.counter++;
  this.container[this.counter] = value;

  // console.log('pushCounter', counter);

};

stackMethods.pop = function () {
  // Need to check if the stack is empty if so skip pop.

  // Take the last value added and remove it, also return it

  if (this.counter > 0) {
    var lastProperty = this.container[this.counter];
    // console.log(this[counter]);
    // console.log('before', counter);
    delete this.container[this.counter];
    this.counter--;
    // console.log('after', counter);
    return lastProperty;
  }
};

stackMethods.size = function () {
  return this.counter;
};