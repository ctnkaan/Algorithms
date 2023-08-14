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

 const preorder = (root, stack) => {
    
    if (root) {
        stack.push(root.val);
        preorder(root.left, stack);
        preorder(root.right, stack);
        return stack;
    }
}


var preorderTraversal = function(root) {
    if (!root)
        return [];
    
    const stack = [];
    
    return preorder(root, stack);
};