/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function detectCycle(head: ListNode | null): ListNode | null {
    let turtle = head, rabbit = head;
    
    while (rabbit !== null && rabbit.next !== null) {
        turtle = turtle.next;
        rabbit = rabbit.next.next;
        
        if (turtle === rabbit) {
            turtle = head;
            
            while (turtle !== rabbit) {
                turtle = turtle.next;
                rabbit = rabbit.next;
            }
            
            return turtle;
        }
    }
    
    return null;
};