/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const nodesSet = new Set();
  
  // Traverse the first linked list and store each node in the set
  while (headA !== null) {
      nodesSet.add(headA);
      headA = headA.next;
  }
  
  // Traverse the second linked list and check if any node exists in the set
  while (headB !== null) {
      if (nodesSet.has(headB)) {
          return headB; // Found the intersection node
      }
      headB = headB.next;
  }
  
  return null; // No intersection
};
// 思路
// 使用 Set 来存储链表 headA 中的节点引用。
// 遍历 headB 时检查当前节点是否在 Set 中。找到第一个匹配的节点即为相交节点，返回该节点。
// 如果遍历完 headB 仍未找到相交节点，则返回 null。
const headA = [4, 1, 8, 4, 5];
const headB = [5, 0, 1, 8, 4, 5];
console.log(getIntersectionNode(headA, headB))