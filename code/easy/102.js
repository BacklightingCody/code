/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var removeElements = function (head, val) {

  let dummy = new ListNode(0);
  dummy.next = head;

  let current = dummy;

  // 遍历链表，删除值为 val 的节点
  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;  // 跳过要删除的节点
    } else {
      current = current.next;  // 继续遍历
    }
  }

  return dummy.next;  // 返回实际的头节点
};

// var removeElements = function (head, val) {
//   // 基本情况：链表为空
//   if (head === null) {
//       return null;
//   }
  
//   // 递归处理当前节点的下一个节点
//   head.next = removeElements(head.next, val);
  
//   // 如果当前节点的值等于 val，跳过当前节点
//   return head.val === val ? head.next : head;
// };