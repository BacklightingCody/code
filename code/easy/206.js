/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null
  let current = head
  while (current != null) {
    let next = current.next
    current.next = pre
    pre = current
    current = next
  }
  return pre
};
const head = [1,2,3,4,5]
console.log(reverseList(head))