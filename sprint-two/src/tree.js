var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  val = Tree(value);
  // assign value as the next node. 
  // add that node to the children array (tree)
  // console.log(value);
  this.children.push(val);
  // console.log(this.children);

  
};

treeMethods.contains = function(target) {
  // check if target exists within family tree and return Boolean value
  // while current child is a node
  console.log(this.children);
  
  if (target === this.value) {
    return true;
  } else if (this.children.length > 0) { 
    var targetFound = false;
    for (var i = 0; i < this.children.length; i++) {
      if (targetFound === false) {
        targetFound = this.children[i].contains(target);
      }
    }
    return targetFound;

  }
  return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
