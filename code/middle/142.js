/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const set = new Set();
  let count = 0
  while (head) {
    if (set.has(head)) {
      return head
    }
    set.add(head, count)
    count++
    head = head.next;
  }
  return null;
};