/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */ 


 var addTwoNumbers = function(l1, l2) {
    
    //create a new node
    const head = new ListNode();
    let currNode = head;
    let carry = 0;
    
    //continue until both l1 and l2 are null, together with carry being equal to zero
    while (l1 || l2 || carry) {
        
        //add a new node
        let newNode = new ListNode();
        currNode.next = newNode;
        currNode = currNode.next;
        
        //l1.val + l2.val + carry
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        //if carry is > 10 make the carry 1
        carry = sum >= 10 ? 1 : 0;
        
        //get the first number
        currNode.val = sum % 10;
        
        //if the nodes are not null go to the next
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    
    //we need to return this because we created the node head with value 0
    return head.next;
};