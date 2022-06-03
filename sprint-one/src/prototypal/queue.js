var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.ticket = 0;
  someInstance.serving = 0;
  someInstance.length = 0;
  return someInstance;

};


var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.ticket] = value;
  this.ticket++;
  this.length++;
};

queueMethods.dequeue = function () {
  if (this.length === 0) {
    return this.size();
  } else {
    var result = this.storage[this.serving];
    delete this.storage[this.serving];
    this.length--;
    this.serving++;
    return result;
  }
}

queueMethods.size = function () {
  return this.length;


}


