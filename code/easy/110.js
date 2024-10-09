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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let res = true
  const dfs = node => {
    if (!node) return 0
    const left = dfs(node.left)
    const right = dfs(node.right)
    if (Math.abs(left - right) > 1) { res = false }
    return Math.max(left, right) + 1
  }
  dfs(root)
  return res
};
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
// const root = [3, 9, 20, null, null, 15, 7]   //true
const root = [1, 2, 2, 3, 3, null, null, 4, 4]   //false
console.log(isBalanced(root))

// 二叉树要点
// 边界条件为树为空，返回null,避免无线递归，然后找到判断条件，return 即可