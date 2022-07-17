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


function preorderTraversal(root) {
    const retArr = []
    
    bTraversal(root);
    
    function bTraversal(node) {
        
        if(!node) return;
        
        retArr.push(node.val) // push if val then recurse to next node
        
        if(node.left) bTraversal(node.left);
        
        if(node.right) bTraversal(node.right);
        
    }
    
    return retArr;
    
};