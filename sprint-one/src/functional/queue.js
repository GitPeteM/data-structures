var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var serving = 0;
  var ticket = 0;
  var size = 0;

  // Implement the methods below


  //Store Value
  //Increment Queue Size
  //Increment Storage Key
  someInstance.enqueue = function(value) {
    storage[ticket] = value;
    ticket++;
    size++;
  };

  //Handle empty
  //Remove head from storage
  //Increment Serving
  //Decrement Size
  //Return head
  someInstance.dequeue = function() {
    if (size === 0) {
      return size
    } else {
      var result = storage[serving];
      delete storage[serving];
      serving++;
      size--;

      return result;

    }

  };

  //return length
  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
