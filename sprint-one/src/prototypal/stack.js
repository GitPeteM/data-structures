var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  return someInstance;

};

var stackMethods = {};
var counter = 0;

stackMethods.push = function(value) {
  counter++;
  this[counter] = value;

};

stackMethods.pop = function() {

  if (counter > 0) {
    var lastProp = this[counter];
    delete this[counter];
    counter --;
    return lastProp;
  }

};

stackMethods.size = function () {
  return counter;

};


