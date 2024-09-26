/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null) {
    return root2
  }
  if (root2 === null) {
    return root1
  }
  const root = new TreeNode(root1.val + root2.val)
  root.left = mergeTrees(root1.left, root2.left)
  root.right = mergeTrees(root1.right, root2.right)
  return root
};

function TreeNode (val, left, right) {

  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)

}
const root1 = new TreeNode(1, new TreeNode(3, 5), 2)
const root2 = new TreeNode(2, new TreeNode(1, undefined, 4), new TreeNode(5, undefined, 7))
console.log(mergeTrees(root1, root2))