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
 * @return {number[][]}
 */
function levelOrder(root) {
  if (root === null) return [];
  let result = [];
  let queue = [root]; // 使用队列来存储节点
  while (queue.length > 0) {
    let levelSize = queue.length; // 当前层的节点数
    let levelValues = []; // 存储当前层的节点值

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // 从队列中取出节点
      levelValues.push(node.val); // 访问当前节点
      if (node.left !== null) {
        queue.push(node.left); // 将左子节点加入队列
      }
      if (node.right !== null) {
        queue.push(node.right); // 将右子节点加入队列
      }
    }

    result.push(levelValues); // 将当前层的节点值添加到结果中
  }

  return result;
}
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  3,
  new TreeNode(9, null, null),
  new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null))
);
console.log(levelOrder(root));
