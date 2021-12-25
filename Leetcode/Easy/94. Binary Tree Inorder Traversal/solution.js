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

 const inorder = (root, stack) => {
    if (root != null) {
        inorder(root.left, stack);
        stack.push(root.val);
        inorder(root.right, stack);
        return stack;
    }
}

var inorderTraversal = function(root) {
    if (root == null)
        return [];
    
    const stack = [];
    
    return inorder(root,stack);
};