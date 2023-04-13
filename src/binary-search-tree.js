const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
 constructor(data) {
  this.data = data;
  this.left = null;
  this.right = null;
 }
}

class BinarySearchTree {
 constructor() {
  this.rootNode = null;
 }

 root() {
  return this.rootNode;
 }

 add(value) {
  const node = new Node(value);

  if (!this.rootNode) {
   this.rootNode = node;
  } else {
   let current = this.rootNode;

   while (true) {
    if (value < current.data) {
     if (!current.left) {
      current.left = node;
      break;
     } else {
      current = current.left;
     }
    } else if (value > current.data) {
     if (!current.right) {
      current.right = node;
      break;
     } else {
      current = current.right;
     }
    } else {
     break;
    }
   }
  }
 }

 has(value) {
  let current = this.rootNode;

  while (current) {
   if (value === current.data) {
    return true;
   } else if (value < current.data) {
    current = current.left;
   } else {
    current = current.right;
   }
  }

  return false;
 }

 find(value) {
  let current = this.rootNode;

  while (current) {
   if (value === current.data) {
    return current;
   } else if (value < current.data) {
    current = current.left;
   } else {
    current = current.right;
   }
  }

  return null;
 }

 remove(value) {
  const removeNode = (node, value) => {
   if (!node) {
    return null;
   }

   if (value === node.data) {
    if (!node.left && !node.right) {
     return null;
    }

    if (!node.left) {
     return node.right;
    }

    if (!node.right) {
     return node.left;
    }

    let tempNode = node.right;

    while (tempNode.left) {
     tempNode = tempNode.left;
    }

    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
   } else if (value < node.data) {
    node.left = removeNode(node.left, value);
    return node;
   } else {
    node.right = removeNode(node.right, value);
    return node;
   }
  };

  this.rootNode = removeNode(this.rootNode, value);
 }

 min() {
  if (!this.rootNode) return null;
  let res;
  const minSearch = (node) => {
   if (!node.left) {
    res = node.data;
   } else {
    minSearch(node.left);
   }
  };
  minSearch(this.rootNode);
  return res;
 }

 max() {
  if (!this.rootNode) return null;
  let res;
  const maxSearch = (node) => {
   if (!node.right) {
    res = node.data;
   } else {
    maxSearch(node.right);
   }
  };
  maxSearch(this.rootNode);
  return res;
 }
}

module.exports = {
 BinarySearchTree,
};
