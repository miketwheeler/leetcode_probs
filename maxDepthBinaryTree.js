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
 * @return {number}
 */



function maxDepth(root) {

    function depth(node) {

        return node ? Math.max(depth(node.left), depth(node.right)) + 1  : 0;
    }
    
    return depth(root); 
    
};