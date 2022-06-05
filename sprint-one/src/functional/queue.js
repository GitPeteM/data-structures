var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var last = 0;
  var first = 0;

  // first in , first out

  // Implement the methods below


  //Store Value
  //Increment Queue Size
  //Increment Storage Key
  someInstance.enqueue = function(value) {
    // key of 1 : value of a
    // key of 2 : value of b

    // take property as a counter : value to storage object.
    last++;
    storage[last] = value;
    // console.log(storage);
    // console.log('enqueue', storage);

  };

  //Handle empty
  //Remove head from storage
  //Increment Serving
  //Decrement Size
  //Return head
  someInstance.dequeue = function() {
    if (last - first > 0) {
      first++;
      var firstProperty = storage[first];
      delete storage[first];
      return firstProperty;
    }
  };

  //return length
  someInstance.size = function() {

    // return counter subtract 1.
    return last - first;
  };
  return someInstance;
};
