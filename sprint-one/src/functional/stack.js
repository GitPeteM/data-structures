var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counterVar = 1;

  // last in , first out

  // Implement the methods below
  someInstance.push = function(value) {
    // key of 1 : value of a
    // incrememnt key by 1 for each value being added.

    // create counterVar at 1 (outside of function)
    // add prop /counter : value to storage object
    storage[counterVar] = value;
    // console.log(storage);
    //incrememnt counterVar
    counterVar++;
  };

  someInstance.pop = function() {
    // first in / last out
    // return value should be what we just pop'd

    // check for properties
    if (counterVar > 1) {
      // create var to hold lastProperty
      var lastProperty = storage[counterVar - 1];
      // delete last property in storage
      delete storage[counterVar - 1];
      counterVar--;

      // return lastPropterty
      return lastProperty;
    }

  };

  someInstance.size = function() {

    return counterVar - 1;

  };

  return someInstance;
};
