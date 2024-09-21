/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const set = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    }
    set.add(head, true)
    head = head.next;
  }
  return false;
};

function ListNode (val) {
  this.val = val;
  this.next = null;
}
const list = new ListNode([3, 2, 0, -4])
console.log(hasCycle(list))