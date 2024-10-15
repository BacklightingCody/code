/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const arr = []
  while (head !== null) {
    arr.push(head.val)
    head = head.next
  }
  const n = arr.length

  if (n % 2 == 0) {
    console.log(arr)
    const preArr = arr.slice(0, n / 2).join('')
    const lastArr = arr.slice(n / 2).reverse().join('')
    console.log(preArr, lastArr)
    return preArr == lastArr
  }
  if (n % 2 == 1) {
    const preArr = arr.slice(0, Math.floor(n / 2)).join('')
    const lastArr = arr.slice(Math.floor(n / 2 + 1)).reverse().join('')
    return preArr == lastArr
  }
  return false
};

// var isPalindrome = function (head) {
//   const arr = [];
  
//   // 将链表值存入数组
//   while (head !== null) {
//       arr.push(head.val);
//       head = head.next;
//   }
  
//   // 检查数组是否为回文
//   let left = 0, right = arr.length - 1;
//   while (left < right) {
//       if (arr[left] !== arr[right]) return false;
//       left++;
//       right--;
//   }
  
//   return true;
// };

// 快慢指针最优解
// var isPalindrome = function (head) {
//   if (head === null || head.next === null) return true;

//   // 找到中点（快慢指针）
//   let slow = head, fast = head;
//   while (fast !== null && fast.next !== null) {
//       slow = slow.next;
//       fast = fast.next.next;
//   }

//   // 反转后半部分链表
//   let prev = null;
//   while (slow !== null) {
//       let nextNode = slow.next;
//       slow.next = prev;
//       prev = slow;
//       slow = nextNode;
//   }

//   // 比较前半部分和反转后的后半部分
//   let left = head, right = prev;
//   while (right !== null) {  // 只需要遍历右半部分
//       if (left.val !== right.val) {
//           return false;
//       }
//       left = left.next;
//       right = right.next;
//   }

//   return true;
// };