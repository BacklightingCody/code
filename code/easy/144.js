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
var preorderTraversal = function (root) {
  const list = []
  if(root==null) return []
  function preOrder(root, list) {
      if (root === null) return;
      list.push(root.val);       // 访问根节点
      preOrder(root.left, list); // 遍历左子树
      preOrder(root.right, list);// 遍历右子树
      return list;
  }
  return preOrder(root,list)

};
const root = {val:1,left:{val:2,left:{val:4}},right:{val:3}}
console.log(preorderTraversal(root));