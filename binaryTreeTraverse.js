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


const root1 = [1,null,2,3]
function inorderTraversal(root) {
    const returnArr = []
    
    traverse(root);
    
    function traverse(node) {
        if(!node) return;
        
        if(node.left) traverse(node.left)
        
        returnArr.push(node.val)
        
        if(node.right) traverse(node.right)
        
    }

    return returnArr;
};


console.log(`returned: ${inorderTraversal(root1)}`)