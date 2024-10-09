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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  if (!root.left && !root.right) return root.val === targetSum
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum = 22
console.log(hasPathSum(root, targetSum))


// 根到叶子路径：路径必须从树的根节点开始，最终到达叶子节点。叶子节点是指左右子节点都为 null 的节点。
// 目标和：路径上的所有节点值加起来必须等于 targetSum。
// 递归的核心在于将复杂问题分解成 规模较小但类似的问题，然后通过合并子问题的解得到最终答案。

// 2.1. 基本的递归模式：
// 树的每个节点可以看作是一个小问题的一部分。我们从根节点开始，然后逐步递归到子节点，直到叶子节点（即没有左、右子节点的节点）。

// 树的递归结构：
// 递归的基本条件（Base Case）：
// 当我们到达叶子节点时，我们要判断当前节点的值是否与 targetSum 相等。这是因为我们已经走到了路径的末尾。
// 递归的递推条件：
// 我们先从根节点开始，检查它的左右子节点。我们将当前节点的值从 targetSum 中减去，并递归检查它的子树，看看是否有任何路径满足条件。

// 2.2. 递归的具体步骤：
// 假设我们当前位于根节点：
// 检查当前节点是否是 null：如果当前节点为 null，则表示这条路径不可能满足要求，返回 false。
// 判断是否为叶子节点：如果当前节点是叶子节点，并且当前节点的值刚好等于 targetSum，那么这条路径是满足要求的。
// 递归检查左右子树：如果当前节点不是叶子节点，我们递归检查它的左子树和右子树，将 targetSum 减去当前节点的值。
// 递归的核心思想是将大问题分解为多个小问题。在每一层递归中，问题的规模减小，最终收敛到最基本的情况（叶子节点）。
// 条件分支：根据当前节点的不同情况（null、叶子节点、非叶子节点）采用不同的处理方式。
// 逐步收缩问题规模：每次递归，我们都在缩小目标和 targetSum，直到叶子节点处为止。

// 使用相同的递归思维，我们可以解决其他二叉树相关的问题。例如：
// 最大路径和：类似地，递归检查左右子树的路径和，选择最大路径。
// 求树的深度：递归计算左右子树的最大深度，并返回 max(leftDepth, rightDepth) + 1。