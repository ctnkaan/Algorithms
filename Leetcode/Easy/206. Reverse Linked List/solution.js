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
 var reverseList = function(head) {
    
    if (head == null || head.next == null)
        return head;
    
    let first = head;
    let second = first.next;
    
    while(second != null) {
        let third = second.next;
        second.next = first;
        first = second;
        second = third;
    }
    
    head.next = null;
    head = first
    
    return head;
};