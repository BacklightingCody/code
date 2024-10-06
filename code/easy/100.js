/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // Base case: if both are null, trees are the same
  if (p === null && q === null) {
      return true;
  }

  // If one is null and the other is not, trees are not the same
  if (p === null || q === null) {
      return false;
  }

  // If values of current nodes don't match, trees are not the same
  if (p.val !== q.val) {
      return false;
  }

  // Recursively check both left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
const p = [1, 2, 3];
const q=  [1, 2, 3];
console.log(isSameTree(p, q))