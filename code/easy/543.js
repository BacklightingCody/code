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
var diameterOfBinaryTree = function (root) {
  let ans = 1;

  function depth (rootNode) {
    if (!rootNode) {
      return 0;
    }
    // 递归获取 左/右 子树的深度（节点数）
    let left = depth(rootNode.left);
    let right = depth(rootNode.right);
    // 最长路径（节点数）
    ans = Math.max(ans, left + right + 1);
    // 以根节点为数的最大深度
    return Math.max(left, right) + 1;
  }

  depth(root);
  // 节点数 - 1
  return ans - 1;
}
const root = [1, 2, 3, 4, 5]
console.log(diameterOfBinaryTree(root))

// 理解
// 从根节点 1 开始，调用 depth(root)，此时 root 是 1。
// 对 1 的左子树 2 调用 depth(rootNode.left)：
// 对 2 的左子树 4 调用 depth(rootNode.left)，此时 4 没有子节点，所以递归会返回 0，并且 left 和 right 都是 0。此时 depth(4) 返回 1（因为 Math.max(0, 0) + 1）。
// depth(2) 会将 4 的深度返回并加 1，返回 2。
// 对 1 的右子树 3 调用 depth(rootNode.right)：
// 3 没有子节点，所以 depth(3) 直接返回 1。
// 最后，depth(1) 通过左右子树深度 2 和 1，返回 3，表示整个树的最大深度。