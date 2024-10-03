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
var isSymmetric = function (root) {
  function check (root1, root2) {
    // 如果两个节点都是 null，表示对称
    if (root1 == null && root2 == null) return true;

    // 如果只有一个节点是 null 或者节点的值不同，表示不对称
    if (root1 == null || root2 == null || root1.val !== root2.val) return false;

    // 递归比较
    return check(root1.left, root2.right) && check(root1.right, root2.left);
  }

  // 从根节点的左右子树开始比较
  return check(root, root);
};
const root = [1, 2, 2, 3, 4, 4, 3]
console.log(isSymmetric(root))