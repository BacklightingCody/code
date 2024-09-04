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

var inorderTraversal = function (root) {
  let list = [];
  let i = 0;
  function inorder(root, list) {
    if (root === null) return list;
    i += 2;
    console.log(i);
    inorder(root.left, list);
    i += 10;
    console.log(i);
    console.log(root.val, "val");
    list.push(root.val);
    inorder(root.right, list);
  }
  inorder(root, list);
  return list;
};
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3), null),
  new TreeNode(4)
);
console.log(inorderTraversal(root));
