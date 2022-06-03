var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var serving = 0;
  var ticket = 0;
  var size = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    storage[ticket] = value;
    ticket++;
    size++;
    serving = ticket - 1;
  };

  someInstance.pop = function() {
    if (size === 0) {
      return size
    } else {
       var result = storage[serving];
       delete storage[serving];
       serving--;
       size--;
       return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
