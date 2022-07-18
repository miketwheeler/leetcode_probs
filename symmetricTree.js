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
 * @return {boolean}
 */


// traverses the tree and checks for a node's-opposing-node's value has mirror-symmetry
function isSymmetric(root) {
    function depthFirstSearch(nodeA, nodeB) {
        if(!nodeA && !nodeB) return true;
        
        if((!nodeA || !nodeB) || nodeA.val !== nodeB.val) return false;
        
        // compare the opposing nodes to indicate mirror-symmetry
        return (depthFirstSearch(nodeA.right, nodeB.left)) && (depthFirstSearch(nodeA.left, nodeB.right))
    }
    
    return depthFirstSearch(root, root);
};
