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
 var hasCycle = function(head) {
    let map = new Set();
    
    while (head) {
        if (map.has(head)) {
            return true;
        }
        map.add(head);
        head = head.next;
    }
    
    return false;
};