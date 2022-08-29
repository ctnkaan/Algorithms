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
  const arr = [];

  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  if (arr.join("") === arr.reverse().join("")) return true;
  return false;
};
