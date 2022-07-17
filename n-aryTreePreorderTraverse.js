/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */ 
 var preorder = function(root) {
    const retArr = []
    
    naryTraversal(root);
    
    function naryTraversal(node) {
        if(!node) return;
        
        retArr.push(node.val) // push if val then recurse to next node
        
        if(node.left) naryTraversal(node.left);
        
        if(node.right) naryTraversal(node.right);  
    }
    
    return retArr;
};