var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;


};


/*
 * Complexity: What is the time complexity of the above functions?
 */


BinarySearchTree.prototype.insert = function (val) {
  //Check input val against this.value, see if val is less than
  if (val < this.value) {
    // if this.left has not be assigned
    if (this.left === null) {
      // set this.left to new instance of BST with val as input
      this.left = new BinarySearchTree(val);
    } else {
      //otherwise, recursive call insert on the existing left child BST(val)
      this.left.insert(val);
    }
  // Check if input val is greater than BST's value.
  } else if (val > this.value) {
    // if the right child of the BST's tree has not been assigned
    if (this.right === null) {
      // Set the right child as a new instance of BST with val as input
      this.right = new BinarySearchTree(val);
    } else {
      //otherwise, recursive call insert on the existing right child BST(val)
      this.right.insert(val);
    }
  } else {
    //If input is neither greater or less than
    return;
  }


};

//Base case check if this.value = input
//Recursive: If input value is less than or greater than this.value, recursively call contains on this.left or this.right respectively
BinarySearchTree.prototype.contains = function (val) {
  if (val === this.value) {
    return true;
  } else if (val < this.value) {
    if (this.left !== null ) {
      return this.left.contains(val);
    }
    return false;
  } else if (val > this.value) {
    if (this.right !== null) {
      return this.right.contains(val);
    }
    return false;
  }

};

//Base case call cb func on this.value
//Recursive case check for nodes on left/right and call
BinarySearchTree.prototype.depthFirstLog = function (func) {
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(func);
  }

};

// IDEA for a Test
// create a test that accounts for duplicates and throws an error.