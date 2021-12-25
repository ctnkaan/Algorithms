/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 const postOrder = (root, stack) => {
    if (root) {
        postOrder(root.left, stack);
        postOrder(root.right, stack);
        stack.push(root.val);
        
        return stack;
    }
}

var postorderTraversal = function(root) {
    if (!root)
        return [];
    
    const stack = [];
    
    return (postOrder(root, stack));
};