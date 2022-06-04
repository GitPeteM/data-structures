
//Nodes have a Value(node) and an Edges property
// Instantiate a new graph
var Graph = function() {
  this.container = {
      
  };
  // this.numberOfNodes = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // create a variable nodeKey set to copy of the node
  // add nodeKey as a value and node as a key to the created object within constructor.
  var wrapper = {};
  wrapper.vertex = node;
  wrapper.edges = [];
  this.container[node] = wrapper;
  // console.log(this.container);
// container = { 1: {vertex : 1, edges : []}, 2: {vertex : 2, edges : []} }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // look up the target node within the container object

  if (this.container[node]) {
    return true;
  }
  return false;

};


// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// remove the edge instance in each connecting Node to the node that has been removed.
// if target node exists within container
// remove edges of connected nodes
// delete target node

  if (this.container[node]) {
    var targetNode = this.container[node];
    // remove edges of connected nodes
    // iterate over the the targetNode's edges
    for (var i = 0; i < this.container[node].edges.length; i++) {
      // recursively call .removeEdge with the targetNode and current edge.
      var test = this.container[node].edges[i];
      this.removeEdge(node, test);  
    }
    delete this.container[node];
    return targetNode;
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.

Graph.prototype.hasEdge = function(fromNode, toNode) {
  // Look up fromNode and determine if fromNode has edge connecting to toNode. 
  var targetNodeEdges = this.container[fromNode].edges;
  if (this.container[toNode] === undefined) {
    return false;
  } else {
    if (targetNodeEdges.includes(this.container[toNode].vertex)) {
      return true;
    }
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
//Add fromNode.vertex to toNode.edges
//Add toNode.vertex to fromNode.edges
// Access the two node targets within the container object and add their vertices as edges to each.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.container[toNode].edges.push(this.container[fromNode].vertex);
  this.container[fromNode].edges.push(this.container[toNode].vertex); 

};

// toNode's array []
// Remove an edge between any two specified (by value) nodes.
//Access toNode and remove fromNode edges from toNode
//Access fromNode and remove toNode edges from Fromnode
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //this.container[toNode].edges.indexOf(fromNode)
    
  var vertexLoc = this.container[toNode].edges.indexOf(fromNode);
  this.container[toNode].edges.splice(vertexLoc, vertexLoc + 1);
  vertexLoc = this.container[fromNode].edges.indexOf(toNode);
  this.container[fromNode].edges.splice(vertexLoc, vertexLoc + 1);
  // console.log('vertexLoc: ', vertexLoc);
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate over the container.
  for (key in this.container) {
    // invoke the callback function on the current node within container.
    cb(this.container[key].vertex);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


