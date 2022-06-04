var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};
//Check for duplicate entry. If entry is unique, add to Set else do not.
// 'Mel Gibson' {'Mel Gibson' : 'Mel Gibson'}, {'Peter' : 'Peter'}, {'Peter Gabriel' : 'Peter Gabriel'}
// set storage = ['Mel Gibson', 'Pete', 'Peter Gabriel']
setPrototype.add = function(item) {
  // check if entry does not exists within set
  if (this._storage.indexOf(item) === -1) {
    // add entry to set
    this._storage.push(item);
  }
};

//Iterate through storage object by key to check for entry
setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) === -1) {
    return false;
  } 
  return true;
  
};

//Delete item 'string' within array storage
setPrototype.remove = function(item) {
  // find index of the target item
  var itemLoc = this._storage.indexOf(item);
  // remove target item with splice 
  this._storage.splice(itemLoc, itemLoc + 1);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
