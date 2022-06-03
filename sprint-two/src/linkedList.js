var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Insert current value as the next node value.
    // update the list tail to be the next value.
    //1->2->3->4-null 5
    //         t
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    // delete the current head
    // update the list.head to be the next value
    var nodeRemoved = list.head;
    delete list.head;
    list.head = nodeRemoved.next;
    return nodeRemoved.value;


  };

  list.contains = function(target) {
    // search list for target value and return Boolean value
    var node = list.head;
    while (node) {
      console.log('node', node);
      if (target === node.value) {
        return true;
      }
      node = node.next;
    }
    return false;
    
  };

  return list;

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
