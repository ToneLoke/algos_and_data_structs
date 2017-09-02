
// Binary Search Tree
class BST {
  constructor (value, left, right) {
    this.value = value
    this.left = left
    this.right = right
  }
  insert (value) {
    let child = new BST(value)
    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value)
      } else {
        this.left = child
      }
    } else {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = child
      }
    }
    return this
  }
  contains (value) {
    if (value === this.value) return true
    if (value < this.value) {
      if (this.left) {
        return this.left.contains(value)
      } else {
        return false
      }
    } else {
      if (this.right) {
        return this.right.contains(value)
      } else {
        return false
      }
    }
  }

  // Pre-Order traversal
  // visits current node before its child nodes
  // O(n)
  // Depth First
  traverseDepthFirst_inOrder (fn) {
    if (!this.left && !this.right) return fn(this)
    if (this.left) this.left.traverseDepthFirst_inOrder(fn)
    fn(this) // this is where the parent prints
    if (this.right) this.right.traverseDepthFirst_inOrder(fn)
  }
  // Post-Order traversal
  // visit the current node after its child nodes
  // O(n)
  // Depth First
  traverseDepthFirst_preOrder (fn) {
    fn(this)
    if (this.left) this.left.traverseDepthFirst_preOrder(fn)
    if (this.right) this.right.traverseDepthFirst_preOrder(fn)
  }
  // Post-Order traversal
  // visit the current node after its child nodes
  // O(n)
  // Depth First
  traverseDepthFirst_postOrder (fn) {
    if (this.left) this.left.traverseDepthFirst_postOrder(fn)
    if (this.right) this.right.traverseDepthFirst_postOrder(fn)
    fn(this)
  }

  // O(n)
  traverseBreadthFirst (fn) {
    var queue = [this]
    while (queue.length) {
      var node = queue.shift()
      fn(node)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  // O(n)
  // A binary tree is full if every node has either zero or two children (no nodes have only one child)
  checkIfFull () {
    var result = true
    this.traverseBreadthFirst(function (node) {
      if (!node.left && node.right) result = false
      else if (node.left && !node.right) result = false
    })
    return result
  }
  // For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.
  // O(n)
  checkIfBalanced () {
    var heights = []
    var recurse = function (node, height) {
      if (!node.left && !node.right) return heights.push(height)
      node.left && recurse(node.left, height + 1)
      node.right && recurse(node.right, height + 1)
    }
    recurse(this, 1)
    var min = Math.min.apply(null, heights)
    var max = Math.max.apply(null, heights)
    return max - min <= 1
  }
}
let bst = new BST(11)
bst.insert(15)
bst.insert(7)
bst.insert(5)
bst.insert(17)
console.log('json = ' + JSON.stringify(bst, null, 2))

// /This is what the data will look lik after line 112
// json = {
// "value": 11,
// "left": {
//   "value": 7,
//   "left": {
//     "value": 5
//   }
// },
// "right": {
//   "value": 15,
//   "right": {
//     "value": 17
//   }
// }
// }
