

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //This is the Hash Function - Sends input value into Hash Function.
  var index = getIndexBelowMaxForKey(k, this._limit);

  // console.log('index', index);
  // console.log('input', k);
  // console.log('value', v);

  // create a var bucket set to the storage at index or an empty array
  var bucket = this._storage.get(index) || [];
  // add the new key value pair to the bucket
  var tuple = [k, v];
  // iterate over the bucket
  // console.log('tuple', tuple);
  for (var i = 0; i < bucket.length; i++) {
    // if input key is similar to any of the bucket keys
    if (bucket[i][0] === k) {
      //Overwrite with incoming v 
      bucket[i][1] = v;
    }

  }

  bucket.push(tuple);
  console.log('bucket: ', bucket);
  // Place bucket within storage at index
  this._storage.set(index, bucket);
  // console.log('bucket: ', bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  console.log('bucketInRetrieve', bucket);
  if (bucket.length === 0) {
    return undefined;
  }
  // iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    // if the current tuple key matches the input k
    if (bucket[i][0] === k) {
      // return the  the tuple value
      return bucket[i][1];
    }
  }
};

// Find input value within Hash Table and remove it.
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // find bucket with index using .get
  var bucket = this._storage.get(index) || [];
  console.log('removeBucket', bucket);
  // iterate over the bucket using a for loop
  for (var i = 0; i < bucket.length; i++) {
    // if input k equals the key in bucket
    if (bucket[i][0] === k) {
      // set the found tuple to null.
      bucket.splice(i, 1);
    } 
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

// var Hash = new HashTable(); 
// Hash.insert('Bob', 'Loblaw');
// console.log(Hash.retrieve('Bob')); // ==> LobLaw
// Hash.insert('Bob', 'Barker');
// console.log(Hash.retrieve('Bob')); // ==> Barker
