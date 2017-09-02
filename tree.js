// N-Aray Tree
class Tree {
  constructor (value) {
    this.value = value
    this.children = []
  }
  addChild (value) {
    let child = new Tree(value)
    this.children.push(child)
    return child
  }
}

let tree = new Tree(1)
let branch1 = tree.addChild(2)
let branch2 = branch1.addChild(3)
let branch3 = branch2.addChild(4)
let branch4 = branch3.addChild(5)
let branch5 = branch4.addChild(6)

console.log('json = ' + JSON.stringify(tree, null, 2))
