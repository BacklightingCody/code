/**
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
 * @return {number}
 */
var minDepth = function (root) {

  const dfs = node => {
    if (!node) return 0;
    const left = dfs(node.left)
    const right = dfs(node.right)
    if (!node.left || !node.right) {
      return Math.max(left, right) + 1
    }
    return Math.min(left, right) + 1
  }
  return dfs(root)
};
const root = [3, 9, 20, null, null, 15, 7]
console.log(minDepth(root))