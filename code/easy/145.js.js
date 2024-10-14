/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const list = []
  if (root == null) return []
  function lastOrder (root, list) {
    if (root == null) return
    lastOrder(root.left, list)
    lastOrder(root.right, list)
    list.push(root.val)
    return list
  }
  return lastOrder(root, list)
};